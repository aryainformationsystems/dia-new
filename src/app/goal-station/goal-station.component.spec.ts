import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalStationComponent } from './goal-station.component';

describe('GoalStationComponent', () => {
  let component: GoalStationComponent;
  let fixture: ComponentFixture<GoalStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
