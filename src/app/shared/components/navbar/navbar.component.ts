import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  selectedLanguage: string; // Default language

  constructor(private languageService: LanguageService) {
    this.selectedLanguage = languageService.getLanguage();
  }

  switchLanguage(language: string): void {
    this.selectedLanguage = language;
    this.languageService.setLanguage(language);
  }
}
