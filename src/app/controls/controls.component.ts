import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() data: any;
  @Input() templateCtr: any;
  constructor() { }

  ngOnInit(): void {
  }
 public doFilter = (value: string) => {
    this.data.filter = value.trim().toLocaleLowerCase();
  }
}

