import { Component, OnInit } from '@angular/core';
import { SNItemFactory } from 'projects/snitem/src/lib/apisnitem/models/snitemfactory';
import { SNContact } from 'projects/snitem/src/lib/apisnitem/models/sncontact';
import { Contact, dataContact } from '../../services/data/datacontact';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(public factory: SNItemFactory) { }
  datacontact = dataContact;
  ngOnInit(): void {
    console.log(this.datacontact)
    this.datacontact.push({
      name: 'CHOCAPIC',
      email: 'Kristyn@salut.be',
      gsm: '373-227-7060',
      notif: 5,
      visit: 19,
      surface: 121,
      bathroom: 2,
      room: 3,
      status: 'Visite en cours',
      type: 'LOCATAIRE',
    })
    let tor = new SNContact();
    tor.name = "Test"
    tor.email = "dadada"
    SNItemFactory.getInstance().addItem('SNItem.SNContact', tor)
    const obj = SNItemFactory.getInstance().itemByKey('SNItem.SNContact')
    console.log(obj)
    console.log(tor)
    console.log(SNItemFactory.getInstance())
  }
}
