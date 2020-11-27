import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLanguageComponent } from './navigation-language.component';

describe('NavigationLanguageComponent', () => {
  let component: NavigationLanguageComponent;
  let fixture: ComponentFixture<NavigationLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
