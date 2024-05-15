import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesBackToTopComponent } from './our-services-back-to-top.component';

describe('OurServicesBackToTopComponent', () => {
  let component: OurServicesBackToTopComponent;
  let fixture: ComponentFixture<OurServicesBackToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurServicesBackToTopComponent]
    });
    fixture = TestBed.createComponent(OurServicesBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
