import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DetailMovie } from 'src/app/core/interfaces/movies.interface';
import { AccountService } from 'src/app/core/services/account.service';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss'],
})
export class FavoriteMovieComponent implements OnInit, OnDestroy {
  movieFavorite: DetailMovie[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private accountService: AccountService) {}
  ngOnInit(): void {
    this.getListFavoriteMovie();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getListFavoriteMovie() {
    this.accountService
      .getListFavoriteMovie()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.movieFavorite = data.results;
        console.log(data)
      });
  }
}
