import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { event, Action } from 'src/app/services/data/data';
import { SlideshowService } from 'projects/snitem/src/lib/slide-panel/services/slideshow.service';
import { ComponentsService } from 'src/app/services/components.service';
import { eventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile-header.component.html',
  styleUrls: ['./navigation-mobile-header.component.scss']
})
export class NavigationMobileHeaderComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
  menu;
  currentComp;
  element = new event();
  constructor(private _router: Router, private route: ActivatedRoute, private service: eventService,
    private slidepanelservice: SlideshowService,
    private componentservice: ComponentsService,) {
  }
  ngOnInit(): void {
    console.log(this.list)
    const compName = this.route.snapshot.routeConfig.component.name;
    console.log(compName)
    console.log(this.route)
    this.currentComp = this._router.url.substr(6)
    // console.log(this._router.url.substr(6))
    // console.log(this.route.component)
    var snapshot = this.route.snapshot;
    console.log(snapshot.routeConfig.component.name);
  }
  Navigate(parm, name) {
    console.log(parm)
    this.currentComp = parm
    this._router.navigate(['/home/' + parm]);
  }
  public Addevent(element, target): void {
    console.log(this.element)
    const components = this.componentservice.getCurrentComponents(target, element, this);
    this.slidepanelservice.setContentComponents(components);
    this.slidepanelservice.show();
  }
  public AddContact(element, target): void {
    const components = this.componentservice.getCurrentComponents(target, element, this);
    this.slidepanelservice.setContentComponents(components);
    this.slidepanelservice.show();
  }
}
