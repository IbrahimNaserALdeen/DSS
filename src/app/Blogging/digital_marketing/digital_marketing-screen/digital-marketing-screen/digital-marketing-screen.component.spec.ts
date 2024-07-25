import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingScreenComponent } from './digital-marketing-screen.component';

describe('DigitalMarketingScreenComponent', () => {
  let component: DigitalMarketingScreenComponent;
  let fixture: ComponentFixture<DigitalMarketingScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalMarketingScreenComponent]
    });
    fixture = TestBed.createComponent(DigitalMarketingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
