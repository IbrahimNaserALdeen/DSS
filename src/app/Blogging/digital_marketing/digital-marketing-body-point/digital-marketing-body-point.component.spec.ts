import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingBodyPointComponent } from './digital-marketing-body-point.component';

describe('DigitalMarketingBodyPointComponent', () => {
  let component: DigitalMarketingBodyPointComponent;
  let fixture: ComponentFixture<DigitalMarketingBodyPointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalMarketingBodyPointComponent]
    });
    fixture = TestBed.createComponent(DigitalMarketingBodyPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
