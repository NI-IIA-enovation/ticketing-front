import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
@Component({
  selector: 'app-add-good',
  templateUrl: './add-good.component.html',
  styleUrls: ['./add-good.component.scss']
})
export class AddGoodComponent implements OnInit {
  step;
  value = 0;
  mode: ProgressBarMode = 'determinate';
  constructor() { }
  setStep(index: number) {
    this.step = index;
    this.value = this.step * 14
  }
  unsetStep(index: number) {
    if (index === this.step) {
      this.step = undefined
    }
  }
  saveForm() {
    this.step = 7;
    this.value = 100;
  }
  ngOnInit(): void {
  }

}
