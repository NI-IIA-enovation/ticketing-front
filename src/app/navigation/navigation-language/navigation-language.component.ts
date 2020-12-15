import { Component, Input, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-navigation-language',
  templateUrl: './navigation-language.component.html',
  styleUrls: ['./navigation-language.component.scss']
})
export class NavigationLanguageComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
  siteLanguage = 'FR';
  languageList = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' },
    { code: 'de', label: 'DE' }
  ];
  constructor(private service: TranslocoService) { }

  ngOnInit(): void {
  }
  changeSiteLanguage(language: string): void {
    this.service.setActiveLang(language);
    this.siteLanguage = this.languageList.find(f => f.code === language).label;
  }

}
