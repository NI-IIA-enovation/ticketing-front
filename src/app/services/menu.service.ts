import { Injectable } from '@angular/core';
import { dataconfig, Configmenu } from './data/configmenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  config = dataconfig;
  Menus: Configmenu;

  constructor() { }

  getmenu(name): Configmenu{
    return this.config.find(item => item.name === name);
  }
}
