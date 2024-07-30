import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingBodyComponent } from './digital-marketing-body.component';

describe('DigitalMarketingBodyComponent', () => {
  let component: DigitalMarketingBodyComponent;
  let fixture: ComponentFixture<DigitalMarketingBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalMarketingBodyComponent]
    });
    fixture = TestBed.createComponent(DigitalMarketingBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
