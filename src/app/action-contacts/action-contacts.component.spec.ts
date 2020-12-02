import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionContactsComponent } from './action-contacts.component';

describe('ActionContactsComponent', () => {
  let component: ActionContactsComponent;
  let fixture: ComponentFixture<ActionContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
