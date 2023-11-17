import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-event-control',
  templateUrl: './event-control.component.html',
  styleUrls: ['./event-control.component.scss']
})
export class eventControlComponent implements OnInit {
  @Input() data: MatTableDataSource<any>;
  @Output() datasearch  = new EventEmitter();
  constructor() { }

  ngOnInit(): void{
    
  }
 public doFilter = (value: string) => {
   
    this.data.filter = value.trim().toLocaleLowerCase();
    this.datasearch.emit(this.data);
 }
}
