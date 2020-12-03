import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data, PeriodicElement } from './data';

@Injectable({
  providedIn: 'root'
})
export class GoodService {
data =  data;
PeriodicElement = PeriodicElement;
  constructor() { }
  getById(id: number){
    return of(this.data.find(item => item.id === id));
}
}
