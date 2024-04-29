import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurservicessectionComponent } from './ourservicessection.component';

describe('OurservicessectionComponent', () => {
  let component: OurservicessectionComponent;
  let fixture: ComponentFixture<OurservicessectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurservicessectionComponent]
    });
    fixture = TestBed.createComponent(OurservicessectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
