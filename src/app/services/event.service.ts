import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { data, event, actiondata, Action } from './data/data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class eventService {
  data = data;
  actionevent = actiondata;
  private subject = new Subject<event>();
  private eventlist: event[] = [];
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    manifistations: new FormControl(null),
    date_Heure: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
    saison: new FormControl('', Validators.required),
    emplacement: new FormControl(null),
    status: new FormControl(null)
  });

  constructor() {
    this.data.forEach((item: event) => {
      item = new event(item);
      this.eventlist.push(item);
      this.subject.next(item);
    });
  }

  getById(id: number): Observable<event> {
    return of(this.data.find(item => item.id === id));
  }

  setForm(element): any {
    this.form.setValue({
      id: element.ID,
      manifistations: element.manifistations,
      date_Heure: element.date_Heure,
      group: element.group,
      saison: element.saison,
      emplacement: element.emplacement,
      status: element.status,
    });


  }
  addevent(element): any {
    this.eventlist.push(element);
    console.log(this.eventlist)
    this.getListevent();
  }

  getAction(): Action[] {
    return this.actionevent;
  }

  getListevent(): Observable<event[]> {
    return of(this.eventlist);
  }

  getItem(id: number): Observable<event> {
    return this.subject
      .pipe(
        filter((item: event) => item.id === id)
      );
  }

}
