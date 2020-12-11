import {  Injectable } from '@angular/core';
import {  BehaviorSubject, Observable} from 'rxjs';
import { components } from './data/components';
@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  private itemscomponent = components;
  private component:BehaviorSubject<any>;
  constructor() { }

  getCurrentComponents(target, elm, source): Observable<any> {
    this.component = new BehaviorSubject(null);
    const object: string = elm.constructor.name;
    const src: string  =  source.constructor.name;
    const component = this.itemscomponent.filter(item => item.name === target && item.objet === object && item.source === src);
    this.component.next(component);
    return this.component.asObservable();
 }

}
