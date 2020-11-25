import { Injectable } from '@angular/core';
import { dataconfig, Sidepanel } from './sidepanel';
@Injectable({
  providedIn: 'root'
})
export class SidePanelService {
  config = dataconfig;
  Panel: Sidepanel;
  constructor() { }
  getpanel(name): Sidepanel{

    return this.config.find(item => item.name === name);
  }
}
