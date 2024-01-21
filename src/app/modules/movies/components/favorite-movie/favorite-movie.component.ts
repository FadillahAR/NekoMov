import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DetailMovie } from 'src/app/core/interfaces/movies.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss'],
})
export class FavoriteMovieComponent implements OnInit, OnDestroy {
  movieFavorite: DetailMovie[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private localService: LocalStorageService) {}

  ngOnInit(): void {
    this.getListFavoriteMovie();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getListFavoriteMovie() {
    this.movieFavorite = this.localService.getItem('favorite-movie');
  }

  onToggleFavorite(movie: DetailMovie) {
    this.movieFavorite = this.movieFavorite.filter((m) => m.id !== movie.id);
  }
}
