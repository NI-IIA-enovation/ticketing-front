import { keyframes } from '@angular/animations';
import { CdkCell } from '@angular/cdk/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output, Type } from '@angular/core';
import { ODBService } from 'projects/snitem/src/lib/apisnitem/odb.service';
import { Observable, Subject } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OfferService {
  data$: Observable<any>;
 
  constructor(private serviceodb:ODBService,private http : HttpClient) {
    this.data$ =  this.serviceodb.call('/fr/9383/offer/search',[['oquery', 'SNItem.SNOffer(publish%3DYes%26bought%3DNo%26type%3DVente)$SNItem.SNOffer(finance_price+%23)']],'','get','items').pipe(
      tap(console.log),
      shareReplay(1),
      tap(() => console.log('after sharing'))
    );
   }

  getOffers(): Observable<any>   {

    return this.data$;

   }
 


}
