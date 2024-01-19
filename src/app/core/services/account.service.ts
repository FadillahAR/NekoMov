import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLPATH } from '../constant/url';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'https://api.themoviedb.org/3/account/';
  private apiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjBhYmFkNDU4ZDYxYWViMjI5NWU5YjdiMmRjNzU4NyIsInN1YiI6IjY1YTU0MmEyMGYyYWUxMDEzMDViNTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EUrLaIfzHeiM6mtPPZKskylijkCViuukCZc2_9dfUzs';
  private options = {
    headers: {
      Authorization: `Bearer ${this.apiKey}`,
    },
  };
  private account = '20924992'
  constructor(private http: HttpClient) {}

  getListFavoriteMovie() {
    return this.http.get(`${this.baseUrl}${this.account}/${URLPATH.FavoriteMovie}`, this.options);
  }
}
