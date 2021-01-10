import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SurveyStationComponent } from './survey-station/survey-station.component';
import { GoalStationComponent } from './goal-station/goal-station.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnvProviderService } from './services/env-provider.service';
import { TokenInterceptor } from './classes/token-interceptor';
import { SurveyDashboardComponent } from './survey-dashboard/survey-dashboard.component';
import { GoalDashboardComponent } from './goal-dashboard/goal-dashboard.component';
import { SurveySidenavComponent } from './survey-sidenav/survey-sidenav.component';
import { GoalSidenavComponent } from './goal-sidenav/goal-sidenav.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { GoalsComponent } from './goals/goals.component';
import { SurveysComponent } from './surveys/surveys.component';
import { SurveyReportsComponent } from './survey-reports/survey-reports.component';
import { GoalReportsComponent } from './goal-reports/goal-reports.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    ForgotPasswordComponent,
    SurveyStationComponent,
    GoalStationComponent,
    SurveyDashboardComponent,
    GoalDashboardComponent,
    SurveySidenavComponent,
    GoalSidenavComponent,
    OrganizationsComponent,
    GoalsComponent,
    SurveysComponent,
    SurveyReportsComponent,
    GoalReportsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [
    EnvProviderService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
