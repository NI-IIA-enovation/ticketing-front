import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'lib-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() data: MatTableDataSource<any>;
  @Output() datasearch  = new EventEmitter();
  constructor(private renderer: Renderer2,@Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void{
  }
 public doFilter = (value: string) => {
    this.data.filter = value.trim().toLocaleLowerCase();
    this.datasearch.emit(this.data);
 }
}

