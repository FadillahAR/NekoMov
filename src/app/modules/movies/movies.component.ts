import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div>
    <app-navbar></app-navbar>
    <app-list-movie></app-list-movie>
  </div>`,
})
export class HomeComponent {}
