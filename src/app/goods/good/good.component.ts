import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/services/data';
@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {
  element: any;
  column: any;

  Periodi: any;
  constructor(Periodi: PeriodicElement) {
   this.Periodi = Periodi;
  }

  ngOnInit(): void {
  this.column = this.Periodi[0];
  this.element = this.Periodi[1];
  }

}
