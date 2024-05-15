import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWithUsComponent } from './contact-with-us.component';

describe('ContactWithUsComponent', () => {
  let component: ContactWithUsComponent;
  let fixture: ComponentFixture<ContactWithUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactWithUsComponent]
    });
    fixture = TestBed.createComponent(ContactWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
