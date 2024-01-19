import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, ListMovieComponent],
  imports: [RouterModule, CommonModule],
  exports: [NavbarComponent, ListMovieComponent],
})
export class SharedModule {}
