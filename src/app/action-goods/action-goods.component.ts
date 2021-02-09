import { Component, OnInit } from '@angular/core';
import { SlideshowService } from 'projects/snitem/src/lib/slide-panel/services/slideshow.service';
import { ComponentsService } from 'src/app/services/components.service';
import { Good, Action } from 'src/app/services/data/data';
import { GoodService } from 'src/app/services/good.service';
@Component({
  selector: 'app-action-goods',
  templateUrl: './action-goods.component.html',
  styleUrls: ['./action-goods.component.scss']
})
export class ActionGoodsComponent implements OnInit {
  actions: Action[];
  element = new Good();
  constructor(private service: GoodService,
    private slidepanelservice: SlideshowService,
    private componentservice: ComponentsService,) { }

  ngOnInit(): void {
    this.actions = this.service.getAction();
    console.log(this.actions)
  }
  public AddGood(element, target): void {
    console.log(this.element)
    const components = this.componentservice.getCurrentComponents(target, element, this);
    this.slidepanelservice.setContentComponents(components);
    this.slidepanelservice.show();
  }
}
