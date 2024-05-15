import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBackComponent } from './contact-back.component';

describe('ContactBackComponent', () => {
  let component: ContactBackComponent;
  let fixture: ComponentFixture<ContactBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactBackComponent]
    });
    fixture = TestBed.createComponent(ContactBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
