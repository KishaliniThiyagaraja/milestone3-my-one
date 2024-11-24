import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../Service/user.service';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../../../Service/config/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host: { '[@routerTransition]': '' }
})
export class LoginComponent implements OnInit {
navigateToRegister() {
throw new Error('Method not implemented.');
}
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      identifier: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void { }
  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) { return; }
    // Perform login logic here, for now, we'll just navigate to home
    this.router.navigate(['/']);
  } get f() { return this.loginForm.controls; }
}