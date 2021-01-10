import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { GoalDashboardComponent } from './goal-dashboard/goal-dashboard.component';
import { GoalReportsComponent } from './goal-reports/goal-reports.component';
import { GoalStationComponent } from './goal-station/goal-station.component';
import { GoalsComponent } from './goals/goals.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { SettingsComponent } from './settings/settings.component';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { SurveyReportsComponent } from './survey-reports/survey-reports.component';
import { SurveyStationComponent } from './survey-station/survey-station.component';
import { SurveysComponent } from './surveys/surveys.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  {
    path: 'survey-station',
    component: SurveyStationComponent,
    children: [
      { path: '', redirectTo: 'survey-dashboard', pathMatch: 'full' },
      { path: 'survey-dashboard', component: SurveyDashboardComponent },
      { path: 'organizations', component: OrganizationsComponent },
      { path: 'surveys', component: SurveysComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'survey-reports', component: SurveyReportsComponent },
    ],
  },
  {
    path: 'goal-station',
    component: GoalStationComponent,
    children: [
      { path: '', redirectTo: 'goal-dashboard', pathMatch: 'full' },
      { path: 'goal-dashboard', component: GoalDashboardComponent },
      { path: 'organizations', component: OrganizationsComponent },
      { path: 'goals', component: GoalsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'goal-reports', component: GoalReportsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
