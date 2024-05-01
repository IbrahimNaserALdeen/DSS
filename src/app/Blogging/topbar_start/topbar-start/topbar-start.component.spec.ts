import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarStartComponent } from './topbar-start.component';

describe('TopbarStartComponent', () => {
  let component: TopbarStartComponent;
  let fixture: ComponentFixture<TopbarStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarStartComponent]
    });
    fixture = TestBed.createComponent(TopbarStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
