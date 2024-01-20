import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLPATH } from '../constant/url';
import { ResponseToken } from '../interfaces/authentication.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = 'https://api.themoviedb.org/3/authentication/';
  private approvalUrl = 'https://www.themoviedb.org/authenticate/';
  private apiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGQwODFhYzNlZGY5YTdjMzI0MTg3MWRkYzQ2ZjA4MSIsInN1YiI6IjY1YTU0MmEyMGYyYWUxMDEzMDViNTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ffO558T_WYiClqTW65KnRn8VbdHA6hkMFEE5Z1HdrAE';
  private options = {
    headers: {
      Authorization: `Bearer ${this.apiKey}`,
    },
  };

  constructor(
    private http: HttpClient,
    private localService: LocalStorageService
  ) {}

  getRequestToken(): Observable<ResponseToken> {
    return this.http.get(
      this.baseUrl + URLPATH.RequestToken,
      this.options
    ) as Observable<ResponseToken>;
  }

  approvalToken(request_token: string) {
    const approval = window.open(`${this.approvalUrl}${request_token}/allow`);
    if (approval) {
      setTimeout(() => {
        approval.close();
        this.getAccessToken(request_token).subscribe((val: ResponseToken) => {
          this.localService.setItem('session-id', val.session_id);
        });
      }, 5);
    }
  }

  getAccessToken(request_token: string): Observable<ResponseToken> {
    const body = {
      request_token: request_token,
    };
    return this.http.post(
      this.baseUrl + URLPATH.AccessToken,
      body,
      this.options
    ) as Observable<ResponseToken>;
  }

  deleteSession(session_id: string) {
    const deleteParams: any = {
      url: this.baseUrl + URLPATH.session,
      Headers: this.options,
      body: { session_id: session_id },
    };
    return this.http.delete(deleteParams);
  }
}
