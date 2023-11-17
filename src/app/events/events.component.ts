import { Component, OnInit } from '@angular/core';
import { data, event } from '../services/data/data';
import { eventComponent } from './event/event.component';
import { MatTableDataSource } from '@angular/material/table';
import { eventService } from '../services/event.service';
import { ComponentsService } from '../services/components.service';
import { eventControlComponent } from './event-control/event-control.component';
import { OfferService } from '../services/offer.service';
import { SNOffer } from 'src/app/services/models/snoffer';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class eventsComponent implements OnInit {
  dataevent: event[];
  source: eventsComponent;
  eventComponent = eventComponent;
  eventControlComponent = eventControlComponent;

  components: Array<any>;
  dataSource = new MatTableDataSource<event>();
  constructor(private serviceoffer: OfferService, private service: eventService, private componentservice: ComponentsService) {

  }

  ngOnInit(): void {
    this.source = this;
   
    // this.serviceoffer.getOffers().subscribe(item => {
    //   let obj = new SNOffer()
    //   obj.ID = 45454
    //   obj.properties.address = "Avenue des avenues"
    //   obj.properties.title = "AAAAAPPPART"
    //   item.push(obj)
    //   this.dataSource.data = item;
    //   console.log(item)
    // })
    //this.service.getListevent().subscribe(res => {this.dataSource.data = res; });
    this.componentservice.getCurrentComponents('panel', this, this).subscribe(components => this.components = components);
    this.dataSource.data = data;
  }
  dataevents(event): void {
    console.log(event);
    this.dataevent = event;
  }
}
