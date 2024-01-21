import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import {
  DetailMovie,
  MoviePopular,
} from 'src/app/core/interfaces/movies.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.scss'],
})
export class PopularMovieComponent implements OnInit, OnDestroy {
  moviePopular: DetailMovie[] = [];
  bannerMovie: DetailMovie[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getListMoviePopular();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getListMoviePopular() {
    this.movieService
      .getlistMovie()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data: MoviePopular) => {
          this.moviePopular = data.results;
          if (this.bannerMovie.length == 0) {
            this.bannerMovie = this.moviePopular;
          }
        },
        (error) => {
          console.error('Error fetching popular movies:', error);
        }
      );
  }

  description(id: number) {
    return 'description.' + id;
  }
}
