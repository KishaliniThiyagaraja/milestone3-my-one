import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserRegister, UserregisterService } from '../../../Service/userregister.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup; submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { } ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:
        ['', Validators.required], email: ['', [Validators.required, Validators.email]],
      utNumber: ['', Validators.required], password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  } onSubmit(): void {
    this.submitted = true; if (this.registerForm.invalid) { return; } // Perform registration logic here, for now, we'll just navigate to login this.router.navigate(['/login']);
  }
}