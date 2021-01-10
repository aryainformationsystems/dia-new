import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSidenavComponent } from './goal-sidenav.component';

describe('GoalSidenavComponent', () => {
  let component: GoalSidenavComponent;
  let fixture: ComponentFixture<GoalSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
