import { keyframes } from '@angular/animations';
import { CdkCell } from '@angular/cdk/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SNItem } from './snitems/models/snitem';
import { ODBService } from './snitems/odb.service';
import { SNOffer } from './snitems/models/snoffer';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  @Output() itemStored: EventEmitter<SNItem> = new EventEmitter();
 
  constructor(private serviceodb:ODBService,private http : HttpClient) {
    
   }

  getOffers(): Observable<any>   {

   return this.serviceodb.call('/fr/9383/offer/search',[['oquery', 'SNItem.SNOffer(publish%3DYes%26bought%3DNo%26type%3DVente)$SNItem.SNOffer(finance_price+%23)']],'','get','items');

   }
 


}
