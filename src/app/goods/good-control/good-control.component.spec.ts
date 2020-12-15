import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodControlComponent } from './good-control.component';

describe('GoodControlComponent', () => {
  let component: GoodControlComponent;
  let fixture: ComponentFixture<GoodControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
