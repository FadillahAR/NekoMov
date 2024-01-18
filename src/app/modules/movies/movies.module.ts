import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './movies.component';
import { FavoriteMovieComponent } from './components/favorite-movie/favorite-movie.component';

@NgModule({
  declarations: [
    ListMovieComponent,
    DetailMovieComponent,
    HomeComponent,
    NavbarComponent,
    FavoriteMovieComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
