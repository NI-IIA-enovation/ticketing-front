import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMobileFooterComponent } from './navigation-mobile-footer.component';

describe('NavigationMobileFooterComponent', () => {
  let component: NavigationMobileFooterComponent;
  let fixture: ComponentFixture<NavigationMobileFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMobileFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMobileFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
