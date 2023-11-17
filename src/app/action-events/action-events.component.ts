import { Component, OnInit } from '@angular/core';
import { SlideshowService } from 'projects/snitem/src/lib/slide-panel/services/slideshow.service';
import { ComponentsService } from 'src/app/services/components.service';
import { event, Action } from 'src/app/services/data/data';
import { eventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-action-events',
  templateUrl: './action-events.component.html',
  styleUrls: ['./action-events.component.scss']
})
export class ActioneventsComponent implements OnInit {
  actions: Action[];
  element = new event();
  constructor(private service: eventService,
    private slidepanelservice: SlideshowService,
    private componentservice: ComponentsService,) { }

  ngOnInit(): void {
    this.actions = this.service.getAction();
    console.log(this.actions)
  }
  public Addevent(element, target): void {
    console.log(this.element)
    const components = this.componentservice.getCurrentComponents(target, element, this);
    this.slidepanelservice.setContentComponents(components);
    this.slidepanelservice.show();
  }
}
