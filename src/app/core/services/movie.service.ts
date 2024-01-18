import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLPATH } from '../constant/url';
import { Observable } from 'rxjs';
import { DetailMovie, MoviePopular } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3/';
  private apiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjBhYmFkNDU4ZDYxYWViMjI5NWU5YjdiMmRjNzU4NyIsInN1YiI6IjY1YTU0MmEyMGYyYWUxMDEzMDViNTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EUrLaIfzHeiM6mtPPZKskylijkCViuukCZc2_9dfUzs';
  private options = {
    headers: {
      Authorization: `Bearer ${this.apiKey}`,
    },
  };

  constructor(private http: HttpClient) {}

  getlistMovie(): Observable<MoviePopular> {
    return this.http.get(
      this.baseUrl + URLPATH.ListMoviePopular,
      this.options
    ) as Observable<MoviePopular>;
  }

  getTrendingMovies() {
    return this.http.get(
      this.baseUrl + URLPATH.ListTrendingMovies,
      this.options
    );
  }

  getMovieByID(id: number): Observable<DetailMovie> {
    return this.http.get(`${this.baseUrl}${URLPATH.DetailMovie}/${id}`, this.options) as Observable<DetailMovie>;
  }
}
