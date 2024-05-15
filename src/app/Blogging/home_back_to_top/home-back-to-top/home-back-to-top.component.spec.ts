import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBackToTopComponent } from './home-back-to-top.component';

describe('HomeBackToTopComponent', () => {
  let component: HomeBackToTopComponent;
  let fixture: ComponentFixture<HomeBackToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBackToTopComponent]
    });
    fixture = TestBed.createComponent(HomeBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
