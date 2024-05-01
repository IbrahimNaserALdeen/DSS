import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsOurProjectComponent } from './lms-our-project.component';

describe('LmsOurProjectComponent', () => {
  let component: LmsOurProjectComponent;
  let fixture: ComponentFixture<LmsOurProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LmsOurProjectComponent]
    });
    fixture = TestBed.createComponent(LmsOurProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
