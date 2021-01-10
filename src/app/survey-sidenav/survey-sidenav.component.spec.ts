import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySidenavComponent } from './survey-sidenav.component';

describe('SurveySidenavComponent', () => {
  let component: SurveySidenavComponent;
  let fixture: ComponentFixture<SurveySidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveySidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
