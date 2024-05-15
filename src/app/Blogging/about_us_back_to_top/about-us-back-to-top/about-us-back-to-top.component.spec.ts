import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsBackToTopComponent } from './about-us-back-to-top.component';

describe('AboutUsBackToTopComponent', () => {
  let component: AboutUsBackToTopComponent;
  let fixture: ComponentFixture<AboutUsBackToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsBackToTopComponent]
    });
    fixture = TestBed.createComponent(AboutUsBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
