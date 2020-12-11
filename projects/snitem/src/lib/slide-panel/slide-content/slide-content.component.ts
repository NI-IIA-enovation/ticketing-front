import { Component, Input, OnInit } from '@angular/core';
import { SlideService } from '../services/slide.service';

@Component({
  selector: 'lib-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss']
})
export class SlideContentComponent implements OnInit {

  components: any;
  constructor(private serviceslide: SlideService) {
  }
  ngOnInit(): void {
    this.components = this.serviceslide.getComponent();
  }
}
