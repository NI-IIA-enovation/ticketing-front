import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { Contact, dataContact } from '../services/datacontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactlist = ContactListComponent;
  datacontact = dataContact;
  contact = Contact;
  displayedColumns: string[] = ['name',  'contact', 'visit', 'notif',  'Critères', 'type', 'status', 'action'];
  dataSource = new MatTableDataSource();
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.datacontact;
  }

}
