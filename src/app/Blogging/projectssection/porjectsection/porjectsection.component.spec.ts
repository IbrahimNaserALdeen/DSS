import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectsectionComponent } from './porjectsection.component';

describe('PorjectsectionComponent', () => {
  let component: PorjectsectionComponent;
  let fixture: ComponentFixture<PorjectsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorjectsectionComponent]
    });
    fixture = TestBed.createComponent(PorjectsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
