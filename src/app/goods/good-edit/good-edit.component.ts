import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoodService } from 'src/app/services/good.service';

@Component({
  selector: 'app-good-edit',
  templateUrl: './good-edit.component.html',
  styleUrls: ['./good-edit.component.scss']
})
export class GoodEditComponent implements OnInit {

  constructor(private goodservice: GoodService, private route: ActivatedRoute) { 
   

  }
  good: any = {};
  ngOnInit(): void {
   const goodId = Number(this.route.snapshot.queryParams['id']);
   if (goodId) {
        this.goodservice.getById(goodId).subscribe(x => this.good = x);
    }

  }

}
