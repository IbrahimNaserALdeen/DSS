import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPsgeComponent } from './digital-psge.component';

describe('DigitalPsgeComponent', () => {
  let component: DigitalPsgeComponent;
  let fixture: ComponentFixture<DigitalPsgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalPsgeComponent]
    });
    fixture = TestBed.createComponent(DigitalPsgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
