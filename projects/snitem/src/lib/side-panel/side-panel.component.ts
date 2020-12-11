import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  @Input() components: Array<any>;
  constructor() {
    }

  ngOnInit(): void {
 
  }
}