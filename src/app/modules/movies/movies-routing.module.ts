import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { HomeComponent } from './movies.component';
import { FavoriteMovieComponent } from './components/favorite-movie/favorite-movie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    component: DetailMovieComponent,
  },
  {
    path: 'list/favorite',
    component: FavoriteMovieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
