import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCarousalComponent } from './nav-carousal.component';

describe('NavCarousalComponent', () => {
  let component: NavCarousalComponent;
  let fixture: ComponentFixture<NavCarousalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavCarousalComponent]
    });
    fixture = TestBed.createComponent(NavCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
