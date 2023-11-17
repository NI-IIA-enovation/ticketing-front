import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActioneventsComponent } from './action-events.component';

describe('ActioneventsComponent', () => {
  let component: ActioneventsComponent;
  let fixture: ComponentFixture<ActioneventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActioneventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActioneventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
