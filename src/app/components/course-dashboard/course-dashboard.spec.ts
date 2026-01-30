import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDashboard } from './course-dashboard';

describe('CourseDashboard', () => {
  let component: CourseDashboard;
  let fixture: ComponentFixture<CourseDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
