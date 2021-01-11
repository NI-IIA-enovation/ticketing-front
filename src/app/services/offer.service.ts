import { keyframes } from '@angular/animations';
import { CdkCell } from '@angular/cdk/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output, Type } from '@angular/core';
import { ODBService } from 'projects/snitem/src/lib/apisnitem/odb.service';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class OfferService {

 
  constructor(private serviceodb:ODBService,private http : HttpClient) {
    
   }

  getOffers(): Observable<any>   {

   return this.serviceodb.call('/fr/9383/offer/search',[['oquery', 'SNItem.SNOffer(publish%3DYes%26bought%3DNo%26type%3DVente)$SNItem.SNOffer(finance_price+%23)']],'','get','items');

   }
 


}
