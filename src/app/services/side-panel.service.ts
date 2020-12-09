import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { components } from './data/components';
@Injectable({
  providedIn: 'root'
})
export class SidePanelService {
  private itemscomponent = components;
  private component = new BehaviorSubject(null);
  constructor() { }

  setCurrentItem(target, source): void{
    const src: string  =  source.constructor.name;
    const component = this.itemscomponent.filter(item => item.name === target && item.source === src);
    this.component.next(component);
 }
 getComponent(): Observable<any> {
  return this.component.asObservable();
}
}
