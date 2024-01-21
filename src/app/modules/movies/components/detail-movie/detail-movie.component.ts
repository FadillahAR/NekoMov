import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DetailMovie } from 'src/app/core/interfaces/movies.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit, OnDestroy {
  detailMovie: DetailMovie | undefined;
  id: number = 0;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private localService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: any) => {
        this.id = params.id;
        this.getMovieByID(this.id);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getMovieByID(id: number) {
    this.movieService
      .getMovieByID(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((detail: DetailMovie) => {
        this.detailMovie = detail;
      });
  }

  toggleFavoriteMovie(movie: DetailMovie, isFavorite: boolean) {
    this.movieService.addRemoveFavoriteMovie(movie, isFavorite);
  }

  get isFavorite(): boolean {
    const favoriteMovie = this.localService.getItem('favorite-movie') || [];
    return this.detailMovie
      ? favoriteMovie.some(
          (val: DetailMovie) => val.id === this.detailMovie!.id
        )
      : false;
  }

  genreTitle(name: string) {
    let value = name.split(' ');
    if (value.length > 1) {
      const join = value.join('_');
      return 'genre.' + join.toLocaleLowerCase();
    } else {
      return 'genre.' + name.toLowerCase();
    }
  }

  description(id: number) {
    return 'description.' + id;
  }
}
