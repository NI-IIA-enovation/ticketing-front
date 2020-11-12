import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnitemComponent } from './snitem.component';

describe('SnitemComponent', () => {
  let component: SnitemComponent;
  let fixture: ComponentFixture<SnitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
