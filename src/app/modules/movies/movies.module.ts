import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { FavoriteMovieComponent } from './components/favorite-movie/favorite-movie.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './movies.component';
import { PopularMovieComponent } from './components/popular-movie/popular-movie.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [
    DetailMovieComponent,
    HomeComponent,
    FavoriteMovieComponent,
    PopularMovieComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, SharedModule]
})
export class MoviesModule {}
