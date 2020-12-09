import { Injectable } from '@angular/core';
import { dataconfig, List } from './data/sidepanel';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {
  config = dataconfig;
  constructor() { }
  getpanel( object): Array <List>{
    const name: string = object.constructor.name;
    return this.config.find(item => item.name === name).List;
  }
}
