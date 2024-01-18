import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DetailMovie } from 'src/app/core/interfaces/movies.interface';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit, OnDestroy {
  detailMovie: any;
  id: number = 0;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.getMovieByName(this.id);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

  getMovieByName(id: number) {
    this.movieService.getMovieByID(id).pipe(takeUntil(this.destroy$)).subscribe((detail: DetailMovie) => {
      this.detailMovie = detail;
    });
  }
}
