import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGoodsComponent } from './action-goods.component';

describe('ActionGoodsComponent', () => {
  let component: ActionGoodsComponent;
  let fixture: ComponentFixture<ActionGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
