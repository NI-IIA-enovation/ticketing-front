import { Component, OnInit} from '@angular/core';
import { PeriodicElement } from 'src/app/services/data';
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {
  element: any;
  column: any;

  Periodi: any;
  constructor(Periodi: PeriodicElement,registry: MatIconRegistry, sanitizer: DomSanitizer) {
   this.Periodi = Periodi;
   const svg = icon(faPencilAlt).html.join('');

   registry.addSvgIconLiteral(
     'font-pencil',
     sanitizer.bypassSecurityTrustHtml(svg)
   );
  }

  ngOnInit(): void {
  this.column = this.Periodi[0];
  this.element = this.Periodi[1];
  }

}
