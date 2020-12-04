import { Component, Injectable } from '@angular/core';
import { components } from './components';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  itemscomponent = components;
  constructor() { }
  getComponent(name: string): any{
    const component = this.itemscomponent.find(item => item.name === name);
    if  (component){
      return component.component;
    }else{
     return '';
    }
 }
}
