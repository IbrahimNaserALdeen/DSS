import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatuerFactsComponent } from './featuer-facts.component';

describe('FeatuerFactsComponent', () => {
  let component: FeatuerFactsComponent;
  let fixture: ComponentFixture<FeatuerFactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatuerFactsComponent]
    });
    fixture = TestBed.createComponent(FeatuerFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
