import { Component, Input, OnInit } from '@angular/core';
import { Good, Action } from 'src/app/services/data/data';
import { GoodService } from 'src/app/services/good.service';
import { SlideshowService } from 'projects/snitem/src/lib/slide-panel/services/slideshow.service';
import { ComponentsService } from 'src/app/services/components.service';
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
    private slidepanelservice: SlideshowService,
    private componentservice: ComponentsService,
  ) {
  }
  public context: CanvasRenderingContext2D;
  ngOnInit(): void {
    console.log(this.element)
    this.actions = this.service.getAction();
    // console.log(this.actions)
  }

  public SlideShow(element, target): void {
    console.log(element, target)
    const components = this.componentservice.getCurrentComponents(target, element, this);
    this.service.setForm(element);
    this.slidepanelservice.setContentComponents(components);
    this.slidepanelservice.show();
  }
}
