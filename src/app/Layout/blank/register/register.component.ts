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
export class RegisterComponent  {
  registerForm: FormGroup;
  submitted = false;
f: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router , private userRegisterService :UserregisterService ) {
    this.registerForm = this.formBuilder.group({
      role: ['', Validators.required],
      username: ['', Validators.required],
      registerNumber: ['', Validators.required],
      utNumber: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
 { validator: this.mustMatch('password', 'confirmPassword') // Add custom validator
  });
    }
  // Add conditional validation for UT Number based on the role

  mustMatch(password: string, confirmPassword: string)
   { return (formGroup: FormGroup) => { const passControl = formGroup.controls[password]; 
    const confirmPassControl = formGroup.controls[confirmPassword]; 
    if (confirmPassControl.errors && !confirmPassControl.errors['mustMatch']) { return; } 
    if (passControl.value !== confirmPassControl.value) { confirmPassControl.setErrors({ mustMatch: true }); } else { confirmPassControl.setErrors(null); } }; 
  }



  onSubmit(): void {
    this.submitted = true;
    this.userRegisterService.AddRegisterUser(this.registerForm.value).subscribe(data => {
      this.router.navigate(['/login']);
      console.log(data);
    })
    if (this.registerForm.invalid) { return; }
     this.router.navigate(['/login']);       
  } 
}



  // // Add conditional validation for UT Number based on the role
  // this.registerForm.get('role').valueChanges.subscribe(role =>
  //   { const utNumberControl = this.registerForm.get('utNumber');
  //    if (role === 'student') 
  //    { utNumberControl.setValidators([Validators.required]); 

  //    } else { utNumberControl.clearValidators(); 

  //    } utNumberControl.updateValueAndValidity(); }); 
  //  }
