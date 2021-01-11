import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisnitemComponent } from './apisnitem.component';

describe('ApisnitemComponent', () => {
  let component: ApisnitemComponent;
  let fixture: ComponentFixture<ApisnitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApisnitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApisnitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
