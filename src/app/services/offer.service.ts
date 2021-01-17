import { Injectable } from '@angular/core';
import { SNOffer } from './models/snoffer';
import { ODBService } from 'projects/snitem/src/lib/apisnitem/odb.service';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { SNItemFactory } from 'projects/snitem/src/lib/apisnitem/models/snitemfactory';



@Injectable({
  providedIn: 'root'
})
export class OfferService {
  data$: Observable<SNOffer[]>;
  constructor(private serviceodb: ODBService, private factory: SNItemFactory ) {
    factory.addItem('SNItem.SNOffer', new SNOffer());
    this.data$ =  this.serviceodb.call('/fr/9383/offer/search', [['oquery', 'SNItem.SNOffer(publish%3DYes%26bought%3DNo%26type%3DVente)$SNItem.SNOffer(finance_price+%23)']], '', 'get', 'items' , 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6ImZrNWxmNTRicG81NTlwczQ2cHZzMjMwMjI2In0.eyJpc3MiOiJodHRwOlwvXC9zd2lmdGltbW8uZXUiLCJhdWQiOiJodHRwOlwvXC93d3cucGVyaXNvZnQuYmVcL3N3aWZ0aW1tbyIsInN1YiI6IndlYnNpdGUiLCJqdGkiOiJmazVsZjU0YnBvNTU5cHM0NnB2czIzMDIyNiIsImlhdCI6MTYwOTkyNzE1OSwibmJmIjoxNjA5OTI3MTU5LCJleHAiOjE2MDk5MjkzOTIsInJvbGVzIjoiW3tcIm5hbWVcIjpcIndlYnNpdGVcIn1dIiwiZG9tYWluaWQiOjkzODMsInVzZXJpZCI6IjkyNjgxNCJ9.A1Pl19zvgGZg3AD87kF5n-HTV3tV6PS8prn9-Hr_TCk').pipe(
      tap(console.log),
      shareReplay(1),
      tap(() => console.log('after sharing'))
    );
   }

  getOffers(): Observable<any>   {

    return this.data$;

   }
}
