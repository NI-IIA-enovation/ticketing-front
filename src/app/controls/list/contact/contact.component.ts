import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { contact, data } from '../../../services/datacontact';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('templateList') templateList: TemplateRef<any>;
  @ViewChild('templateCtr') templateCtr: TemplateRef<any>;
  displayedColumns: string[] = ['name',  'address', 'gsm', 'code', 'city','actions'];
  dataSource = new MatTableDataSource<contact>(data);
  

  constructor() { }

  ngOnInit(): void {
  }
}
