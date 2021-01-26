import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { data, Good, actiondata , Action } from './data/data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GoodService {
data =  data;
actiongood = actiondata;
private subject = new Subject<Good>();
private goodlist: Good[] = [];
form: FormGroup = new FormGroup({
  id: new FormControl(null),
  name: new FormControl(null),
  city: new FormControl('', Validators.required),
  room: new FormControl('', Validators.required),
  bathroom: new FormControl('', Validators.required),
  area: new FormControl(null),
  info: new FormControl(null),
  user: new FormControl(null),
  notif: new FormControl(null),
  visite: new FormControl(null),
  deadline: new FormControl(null),
  priority: new FormControl(null),
  status: new FormControl(null),
});

  constructor() {
   this.data.forEach((item: Good) => {
        item = new Good(item);
        this.goodlist.push(item);
        this.subject.next(item);
      });
  }

  getById(id: number): Observable<Good>  {
    return of(this.data.find(item => item.id === id));
  }

  setForm(element): any{
  this.form.setValue({
    id: element.ID,
    name: element.title,
    city: element.city,
    room: element.house_sdbnumber,
    bathroom: element.house_sdbnumber,
    area: null,
    info: null,
    user: null,
    notif: null,
    visite: null,
    deadline: null,
    priority: null,
    status: element.status,
  });

  }

  getAction(): Action[]{
  return this.actiongood;
  }

  getListGood(): Observable<Good[]>{
    return of(this.goodlist);
  }

  getItem(id: number): Observable <Good> {
  return this.subject
    .pipe(
      filter((item: Good) => item.id === id)
    );
  }

}
