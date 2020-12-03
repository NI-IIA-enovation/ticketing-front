import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data, PeriodicElement } from './data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class GoodService {
data =  data;
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
  actions: new FormControl(null),
});

PeriodicElement = PeriodicElement;
  constructor() { }
  getById(id: number): Observable<PeriodicElement>{
    return of(this.data.find(item => item.id === id));
}
setCurrentItem(form): void{
  this.form.setValue(form);
}
}
