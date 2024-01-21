import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DecimalPipe } from './pipes/decimal.pipes';

@NgModule({
  declarations: [NavbarComponent, ListMovieComponent, DecimalPipe],
  imports: [RouterModule, CommonModule],
  exports: [NavbarComponent, ListMovieComponent, DecimalPipe],
})
export class SharedModule {}
