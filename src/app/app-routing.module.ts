import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './Components/manager/attendance/attendance.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './Layout/blank/login/login.component';
import { MarksComponent } from './Components/manager/marks/marks/marks.component';
import { RegisterComponent } from './Layout/blank/register/register.component';


const routes: Routes = [ 
  // { path: '', component: HomeComponent }, 
  // { path: 'about', component: AboutComponent }, 
  // { path: 'contact', component: ContactComponent }, 
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},

// { path: '', redirectTo: '/exam-marks', pathMatch: 'full' },
//   { path: 'exam-marks', component: MarksComponent },
// { path: '', component: HomeComponent }, 
{ path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
   { path: '', redirectTo: 'login', pathMatch: 'full' },
// { path: '', redirectTo: '/attendance', pathMatch: 'full' },
//   { path: 'attendance', component: AttendanceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
