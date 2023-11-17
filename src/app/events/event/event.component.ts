import { Component, Input, OnInit } from '@angular/core';
import { event, Action } from 'src/app/services/data/data';
import { eventService } from 'src/app/services/event.service';
import { SlideshowService } from 'projects/snitem/src/lib/slide-panel/services/slideshow.service';
import { ComponentsService } from 'src/app/services/components.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class eventComponent implements OnInit {
  @Input() element: event;
  @Input() column: string;
  actions: Action[];
  constructor(
    private service: eventService,
    private slidepanelservice: SlideshowService,
    private componentservice: ComponentsService,
  ) {
  }
  public context: CanvasRenderingContext2D;
  ngOnInit(): void {
    // console.log(this.element)
    this.actions = this.service.getAction();
    // console.log(this.actions)
  }

  public Editevent(element, target): void {
    const components = this.componentservice.getCurrentComponents(target, element, this);
    this.service.setForm(element);
    this.slidepanelservice.setContentComponents(components);
    this.slidepanelservice.show();
  }
}
