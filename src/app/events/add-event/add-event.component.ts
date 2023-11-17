import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { eventService } from 'src/app/services/event.service';
import { event } from 'src/app/services/data/data';
import { SNOffer } from 'src/app/services/models/snoffer';
import { SNItemFactory } from 'projects/snitem/src/lib/apisnitem/models/snitemfactory';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddeventComponent implements OnInit {
  obj = new SNOffer();
  step;
  value = 0;
  mode: ProgressBarMode = 'determinate';
  constructor(public eventservice: eventService, public factory: SNItemFactory) { }
  setStep(index: number) {
    this.step = index;
    this.value = this.step * 14
  }
  unsetStep(index: number) {
    if (index === this.step) {
      this.step = undefined
    }
  }
  saveForm() {
    this.step = 7;
    this.value = 100;
    console.log(this.obj)
    this.obj.ID = 55
    // this.obj.area = "55m"
    // this.obj.city = 'Bruxelles'
    // this.obj.status = 'Recherche'
    // this.obj.title="appart fll"
    const toSend = {
      ID: 489494,
      title: 'test 12345',
      city: 'Bruxelles',
      house_sdbnumber: '412',
      status: "OPTION"
    }
    // this.factory.addItem('SNItem.SNOffer', this.obj);
    // this.eventservice.setForm(this.obj)
  }
  ngOnInit(): void {
  }

}
