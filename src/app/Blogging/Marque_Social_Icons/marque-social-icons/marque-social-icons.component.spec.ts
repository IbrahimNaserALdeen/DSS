import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueSocialIconsComponent } from './marque-social-icons.component';

describe('MarqueSocialIconsComponent', () => {
  let component: MarqueSocialIconsComponent;
  let fixture: ComponentFixture<MarqueSocialIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarqueSocialIconsComponent]
    });
    fixture = TestBed.createComponent(MarqueSocialIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
