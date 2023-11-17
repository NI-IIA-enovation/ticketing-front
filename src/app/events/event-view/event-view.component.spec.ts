import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eventViewComponent } from './event-view.component';

describe('eventViewComponent', () => {
  let component: eventViewComponent;
  let fixture: ComponentFixture<eventViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ eventViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(eventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
