import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyStationComponent } from './survey-station.component';

describe('SurveyStationComponent', () => {
  let component: SurveyStationComponent;
  let fixture: ComponentFixture<SurveyStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
