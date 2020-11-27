import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-language',
  templateUrl: './navigation-language.component.html',
  styleUrls: ['./navigation-language.component.scss']
})
export class NavigationLanguageComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
  constructor() { }

  ngOnInit(): void {
  }

}
