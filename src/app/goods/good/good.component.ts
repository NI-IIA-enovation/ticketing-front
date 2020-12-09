import { Component, Input, OnInit} from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { Good, Action } from 'src/app/services/data/data';
import { GoodService } from 'src/app/services/good.service';
import { SlidePanelService } from 'src/app/services/slide-panel.service';
import { SlideContentComponent } from '../../slide-content/slide-content.component';
@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {
  @Input() element: Good;
  @Input() column: string;
  actions: Action[];
  constructor(
  private service: GoodService,
  private slidepanelservice: SlidePanelService,
  private servicecontext: ContextService,
  ) {
  }
  public context: CanvasRenderingContext2D;
  ngOnInit(): void {
    this.actions = this.service.getAction();
  }

  public SlideShow(element, target): void {
    this.servicecontext.setCurrentItem(target, element, this);
    this.service.setForm(element);
    this.slidepanelservice.setContent(SlideContentComponent);
    this.slidepanelservice.show();
     }
}
