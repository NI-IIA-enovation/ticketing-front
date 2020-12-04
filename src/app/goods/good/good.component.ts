import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

import { ContextService } from 'src/app/services/context.service';
import { PeriodicElement } from 'src/app/services/data';
import { GoodService } from 'src/app/services/good.service';

import { SlidePanelService } from 'src/app/services/slide-panel.service';
import { GoodEditComponent } from '../good-edit/good-edit.component';
@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {
  @Input() element: PeriodicElement;
  @Input() column: string;
  constructor(
  private service: GoodService,
  private servicecontext: ContextService,
  private slidepanelservice: SlidePanelService,
  ) {
  }
  public context: CanvasRenderingContext2D;
  ngOnInit(): void {

  }

  public SlideShow(element, action): void {
    const component = this.servicecontext.getComponent(this.service.getAction(element.action, action));
    this.service.setform(element);
    this.slidepanelservice.setContent(component);
    this.slidepanelservice.show();
  }
}
