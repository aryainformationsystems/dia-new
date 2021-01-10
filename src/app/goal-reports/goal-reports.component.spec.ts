import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalReportsComponent } from './goal-reports.component';

describe('GoalReportsComponent', () => {
  let component: GoalReportsComponent;
  let fixture: ComponentFixture<GoalReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
