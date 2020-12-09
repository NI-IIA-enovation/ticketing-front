import {  Injectable } from '@angular/core';
import {  BehaviorSubject, Observable} from 'rxjs';
import { components } from './data/components';
@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private itemscomponent = components;
  private component = new BehaviorSubject(null);
  constructor() { }

  setCurrentItem(target, elm, source): void{
    const object: string = elm.constructor.name;
    const src: string  =  source.constructor.name;
    const component = this.itemscomponent.filter(item => item.name === target && item.objet === object && item.source === src);
    this.component.next(component);
 }
 getComponent(): Observable<any> {
  return this.component.asObservable();
}
}
