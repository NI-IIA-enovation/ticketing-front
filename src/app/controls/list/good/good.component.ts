import { Component, OnInit} from '@angular/core';
import { PeriodicElement, data } from '../../../services/data';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {
  element: any;
  column: any;
  dataSource = new MatTableDataSource<PeriodicElement>(data);
  Periodi: any;
  constructor(Periodi: PeriodicElement) {
   this.Periodi = Periodi;
  }

  ngOnInit(): void {
  this.column = this.Periodi[0];
  this.element = this.Periodi[1];
  }

}
