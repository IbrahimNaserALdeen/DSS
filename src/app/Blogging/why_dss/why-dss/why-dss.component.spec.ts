import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyDssComponent } from './why-dss.component';

describe('WhyDssComponent', () => {
  let component: WhyDssComponent;
  let fixture: ComponentFixture<WhyDssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyDssComponent]
    });
    fixture = TestBed.createComponent(WhyDssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
