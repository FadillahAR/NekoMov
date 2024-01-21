// language.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private selectedLanguage: string = 'en'; // Default language

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService
  ) {
    this.getLanguage();
  }

  getLanguage(): string {
    const local = this.localStorage.getItem('language');
    if (local) {
      this.selectedLanguage = local;
      this.translate.use(this.selectedLanguage);
    }
    return this.selectedLanguage;
  }

  setLanguage(language: string): void {
    this.selectedLanguage = language;
    this.localStorage.setItem('language', this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }
}
