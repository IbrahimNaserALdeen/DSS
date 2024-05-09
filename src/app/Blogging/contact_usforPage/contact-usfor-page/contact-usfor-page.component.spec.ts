import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsforPageComponent } from './contact-usfor-page.component';

describe('ContactUsforPageComponent', () => {
  let component: ContactUsforPageComponent;
  let fixture: ComponentFixture<ContactUsforPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsforPageComponent]
    });
    fixture = TestBed.createComponent(ContactUsforPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
