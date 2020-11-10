import { NgModule } from '@angular/core';
import { ControlsComponent } from './controls.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [ControlsComponent],
  imports: [MatFormFieldModule, MatIconModule,BrowserModule,MatButtonModule,MatInputModule
  ],
  exports: [ControlsComponent]
})
export class ControlsModule { }
