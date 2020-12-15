import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'lib-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() data: MatTableDataSource<any>;
  @Input() type: Component;
  @Output() datasearch  = new EventEmitter();
  constructor() { }

  ngOnInit(): void{
  }

 getlist(dt, ds): any{
  return  {data: dt,
          datasearch : ds};
}
}

