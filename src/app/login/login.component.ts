import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  theForm: FormGroup;
  inProgress: boolean;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.theForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.theForm.status == 'INVALID') {
      console.log(this.theForm.value);
      return;
    }
    else {
      this.inProgress = true;
      this.authService.authenticate(this.theForm.value).subscribe(result => {
        this.inProgress = false;
        localStorage.setItem('authToken', result.data.authToken);
        this.router.navigateByUrl('/landing');
      }, err => {
        this.inProgress = false;
        console.log(err);
      });
    }
  }

}
