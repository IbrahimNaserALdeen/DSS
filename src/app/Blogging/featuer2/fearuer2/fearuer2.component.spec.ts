import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fearuer2Component } from './fearuer2.component';

describe('Fearuer2Component', () => {
  let component: Fearuer2Component;
  let fixture: ComponentFixture<Fearuer2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Fearuer2Component]
    });
    fixture = TestBed.createComponent(Fearuer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
