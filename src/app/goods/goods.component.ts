import { Component, OnInit } from '@angular/core';
import {data, Good} from '../services/data/data';
import {GoodComponent} from './good/good.component';
import { MatTableDataSource } from '@angular/material/table';
import { GoodService } from '../services/good.service';
import { ComponentsService } from '../services/components.service';
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  datagood: Good[];
  source: GoodsComponent;
  GoodComponent = GoodComponent;
  components: Array<any>;
  displayedColumns: string[] = ['name',  'user', 'visite', 'notif', 'deadline', 'priority', 'status', 'actions'];
  dataSource = new MatTableDataSource<Good>();
  constructor(private service: GoodService,private componentservice: ComponentsService){
  
   }

  ngOnInit(): void {
    this.source = this;
    this.service.getListGood().subscribe(res => {this.dataSource.data = res; });
    this.componentservice.getCurrentComponents('panel',this,this).subscribe(components =>this.components = components );
    
   }
  datagoods(event): void{
   this.datagood = event;
  }
}
