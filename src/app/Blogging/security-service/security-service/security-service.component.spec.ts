import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityServiceComponent } from './security-service.component';

describe('SecurityServiceComponent', () => {
  let component: SecurityServiceComponent;
  let fixture: ComponentFixture<SecurityServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityServiceComponent]
    });
    fixture = TestBed.createComponent(SecurityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
