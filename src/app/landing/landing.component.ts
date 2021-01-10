import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  enterSurveyStation(): void {
    this.router.navigateByUrl('survey-station');
  }

  enterGoalStation(): void {
    this.router.navigateByUrl('goal-station');
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
