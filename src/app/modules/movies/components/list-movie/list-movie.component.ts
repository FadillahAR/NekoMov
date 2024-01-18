import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { MoviePopular, DetailMovie} from 'src/app/core/interfaces/movies.interface';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit, OnDestroy {
  moviePopular: DetailMovie[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private movieService: MovieService, private router: Router) {}

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
      .subscribe((data: MoviePopular) => {
        this.moviePopular = data.results;
      });
  }

  gotoDetail(id: number) {
    this.router.navigate(['movies','detail', id]);
  }
}
