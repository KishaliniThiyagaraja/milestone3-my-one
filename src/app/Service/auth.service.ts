import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToastService } from './toast.service';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router, private toastr: ToastService) { }
  message: string = ''

  //Login notifications

  OnShowLoginSuccess(){
   this.toastr.showLoginSucces();
  }

  OnShowLoginError(){
    this.toastr.showLoginError();
  }

  OnShowLoginInfo(){
    this.toastr.showLoginInfo();
  }

  //Register notifications

   OnShowRegistrationSuccess(){
    this.toastr.showRegistrationSucces();
   }

   OnShowRegistrationWarning(){
     this.toastr.showRegistrationWarning();
  }

  //Logout notification

  OnShowUserLoggedOutInfo(){
    this.toastr.showUserLoggedOutInfo();
 }

 
  //login method

  // login(email : string, password : string): void {
  //   this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
  //       localStorage.setItem('token','true');

  //       if(res.user?.emailVerified == true){
  //         this.OnShowLoginSuccess();
  //         this.router.navigate(['dashboard']);
  //       } else{
  //         this.router.navigate(['login']);
  //         this.OnShowLoginInfo();
  //       }

  //   }, err => {
  //       this.OnShowLoginError();
  //       this.router.navigate(['/login']);
  //   })
  // }



 //sign out method

  logout() {
    this.OnShowUserLoggedOutInfo();
    this.fireauth.signOut().then(() =>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }


}