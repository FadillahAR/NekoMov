import { Component, Input, OnInit } from '@angular/core';
import { DetailMovie } from 'src/app/core/interfaces/movies.interface';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent {
  @Input() listMovie: DetailMovie[] = [];

  constructor() {
    console.log(this.listMovie)
  }
}
