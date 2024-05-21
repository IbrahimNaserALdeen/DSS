import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignScreenComponent } from './graphic-design-screen.component';

describe('GraphicDesignScreenComponent', () => {
  let component: GraphicDesignScreenComponent;
  let fixture: ComponentFixture<GraphicDesignScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicDesignScreenComponent]
    });
    fixture = TestBed.createComponent(GraphicDesignScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
