import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DetailMovie } from 'src/app/core/interfaces/movies.interface';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent {
  @Input() listMovie: DetailMovie[] = [];

  constructor(private router: Router) {
  }

  gotoDetail(id: number) {
    this.router.navigate(['movies', 'detail', id]);
  }
}