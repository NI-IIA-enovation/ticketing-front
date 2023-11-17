import { Component, OnInit } from '@angular/core';
import { SlideshowService } from 'projects/snitem/src/lib/slide-panel/services/slideshow.service';
import { ComponentsService } from 'src/app/services/components.service';
import { event } from 'src/app/services/data/data';
@Component({
  selector: 'app-action-contacts',
  templateUrl: './action-contacts.component.html',
  styleUrls: ['./action-contacts.component.scss']
})
export class ActionContactsComponent implements OnInit {
  element = new event();
  constructor(
    private slidepanelservice: SlideshowService,
    private componentservice: ComponentsService,) { }

  ngOnInit(): void {
  }
  public AddContact(element, target): void {
    const components = this.componentservice.getCurrentComponents(target, element, this);
    this.slidepanelservice.setContentComponents(components);
    this.slidepanelservice.show();
  }

}
