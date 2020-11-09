import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() data: MatTableDataSource<any>;
  @Output() datasearch  = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
 public doFilter = (value: string) => {
    this.data.filter = value.trim().toLocaleLowerCase();
    this.datasearch.emit(this.data);
 }
}

