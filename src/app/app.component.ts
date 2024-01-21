import { Component, OnDestroy } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';
import { Subject, takeUntil } from 'rxjs';
import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
})
export class AppComponent implements OnDestroy{
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private authService: AuthenticationService, private localService: LocalStorageService) {
   
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
