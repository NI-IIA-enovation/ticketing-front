import { Component } from '@angular/core';
import {dataconfig} from './services/configmenu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
config = dataconfig;
constructor(){
}
}
