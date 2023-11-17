import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eventControlComponent } from './event-control.component';

describe('eventControlComponent', () => {
  let component: eventControlComponent;
  let fixture: ComponentFixture<eventControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ eventControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(eventControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
