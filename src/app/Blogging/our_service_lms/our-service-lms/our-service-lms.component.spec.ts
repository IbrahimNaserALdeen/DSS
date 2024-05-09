import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiceLmsComponent } from './our-service-lms.component';

describe('OurServiceLmsComponent', () => {
  let component: OurServiceLmsComponent;
  let fixture: ComponentFixture<OurServiceLmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurServiceLmsComponent]
    });
    fixture = TestBed.createComponent(OurServiceLmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
