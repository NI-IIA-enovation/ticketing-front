import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eventEditComponent } from './event-edit.component';

describe('eventEditComponent', () => {
  let component: eventEditComponent;
  let fixture: ComponentFixture<eventEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ eventEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(eventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
