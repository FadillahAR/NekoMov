import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div>
    <app-navbar></app-navbar>
    <app-popular-movie></app-popular-movie>
  </div>`,
})
export class HomeComponent {}
