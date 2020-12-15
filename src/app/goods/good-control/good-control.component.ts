import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-good-control',
  templateUrl: './good-control.component.html',
  styleUrls: ['./good-control.component.scss']
})
export class GoodControlComponent implements OnInit {
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
