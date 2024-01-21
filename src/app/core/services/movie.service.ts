import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MOVIE_BASE_URL, MOVIE_OPTIONS } from '../constant/environment';
import { URLPATH } from '../constant/url';
import { DetailMovie, MoviePopular } from '../interfaces/movies.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = MOVIE_BASE_URL;
  private options = MOVIE_OPTIONS;

  constructor(
    private http: HttpClient,
    private localService: LocalStorageService
  ) {}

  getlistMovie(): Observable<MoviePopular> {
    const url = this.baseUrl + URLPATH.ListMoviePopular;
    return this.http.get<MoviePopular>(url, this.options);
  }

  getTrendingMovies(): Observable<any> {
    const url = this.baseUrl + URLPATH.ListTrendingMovies;
    return this.http.get(url, this.options);
  }

  getMovieByID(id: number): Observable<DetailMovie> {
    return this.http.get(
      `${this.baseUrl}${URLPATH.DetailMovie}/${id}`,
      this.options
    ) as Observable<DetailMovie>;
  }

  addRemoveFavoriteMovie(movie: DetailMovie, isRemove: boolean = false) {
    let favoriteMovie: DetailMovie[] =
      this.localService.getItem('favorite-movie') || [];
    const index = favoriteMovie.findIndex(
      (val: DetailMovie) => val.id === movie.id
    );
    if (isRemove) {
      if (index !== -1) {
        favoriteMovie.splice(index, 1);
      }
    } else {
      if (index === -1 || favoriteMovie.length === 0) {
        favoriteMovie.push(movie);
      }
    }

    this.localService.setItem('favorite-movie', favoriteMovie);
  }
}
