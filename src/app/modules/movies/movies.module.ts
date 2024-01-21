import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { FavoriteMovieComponent } from './components/favorite-movie/favorite-movie.component';
import { PopularMovieComponent } from './components/popular-movie/popular-movie.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './movies.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DetailMovieComponent,
    HomeComponent,
    FavoriteMovieComponent,
    PopularMovieComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, SharedModule, TranslateModule],
})
export class MoviesModule {}
