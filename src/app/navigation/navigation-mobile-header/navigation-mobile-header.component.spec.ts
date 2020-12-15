import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMobileHeaderComponent } from './navigation-mobile-header.component';

describe('NavigationMobileHeaderComponent', () => {
  let component: NavigationMobileHeaderComponent;
  let fixture: ComponentFixture<NavigationMobileHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMobileHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMobileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
