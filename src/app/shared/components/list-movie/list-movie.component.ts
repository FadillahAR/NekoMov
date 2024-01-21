import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DetailMovie } from 'src/app/core/interfaces/movies.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent {
  @Input() listMovie: DetailMovie[] = [];
  @Output() toggleFavorite = new EventEmitter<DetailMovie>();

  isFavorited: boolean = false;
  constructor(
    private router: Router,
    private movieService: MovieService,
    private localService: LocalStorageService
  ) {}

  gotoDetail(id: number) {
    this.router.navigate(['movies', 'detail', id]);
  }

  isFavorite(movie: DetailMovie): boolean {
    const favoriteMovie = this.localService.getItem('favorite-movie') || [];
    return favoriteMovie.some((fav: DetailMovie) => fav.id === movie.id);
  }

  toggleFavoriteMovie(movie: DetailMovie) {
    this.isFavorited = this.isFavorite(movie);
    this.movieService.addRemoveFavoriteMovie(movie, this.isFavorited);
    this.toggleFavorite.emit(movie);
  }
}
