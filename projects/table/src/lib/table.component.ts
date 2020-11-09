import { Component, ViewChild, Input, TemplateRef, AfterViewInit, Injector, ReflectiveInjector } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'tm-table',
  template: `<table mat-table matSort matTableResponsive data-table="col-three" [dataSource]="data">
  <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
      <th mat-header-cell *matHeaderCellDef><div class="hr-div" *ngIf="column!= 'actions'">{{column}}</div></th>
      <td mat-cell *matCellDef="let element">
 <ng-container
  *ngComponentOutlet="row; injector:getInjector([column,element])"
></ng-container>
 </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

<mat-paginator #paginator [pageSize]="10" [pageSizeOptions]="[5, 10, 20]" [showFirstLastButtons]="true"> </mat-paginator>
`,
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements  AfterViewInit {
  @Input() displayedColumns: any;
  @Input() data: any;
  @Input() row: any;
  @Input() interface: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  inject: any;
  CellTemplate?: TemplateRef <any>;
  constructor(private inj: Injector) {
    }

  ngAfterViewInit(): void {
  this.dataSource = this.data;
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  }
  getInjector(element: any): any {
    this.inject = ReflectiveInjector.resolveAndCreate( [{ provide: this.interface, useValue: element }], this.inj);
    return this.inject;
  }

}
