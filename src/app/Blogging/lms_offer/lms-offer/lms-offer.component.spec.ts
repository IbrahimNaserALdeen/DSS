import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsOfferComponent } from './lms-offer.component';

describe('LmsOfferComponent', () => {
  let component: LmsOfferComponent;
  let fixture: ComponentFixture<LmsOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LmsOfferComponent]
    });
    fixture = TestBed.createComponent(LmsOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
