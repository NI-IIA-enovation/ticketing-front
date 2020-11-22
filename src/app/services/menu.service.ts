import { Injectable } from '@angular/core';
import { dataconfig } from './configmenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  config = dataconfig;
  constructor() { }
  getmenu(name): any{
    return this.config.find(item => item.name === name);
  }
}
