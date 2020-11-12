import { Component, Input, OnInit} from '@angular/core';
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
  @Input() element: any;
  @Input() column: any;
  Periodi: any;
  constructor(registry: MatIconRegistry, sanitizer: DomSanitizer) {

   const svg = icon(faPencilAlt).html.join('');

   registry.addSvgIconLiteral(
     'font-pencil',
     sanitizer.bypassSecurityTrustHtml(svg)
   );
  }

  ngOnInit(): void {

  }

}
