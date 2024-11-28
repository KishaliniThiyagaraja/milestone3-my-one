import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './Layout/blank/login/login.component';

import { RegisterComponent } from './Layout/blank/register/register.component';
import { ActionMarkComponent } from './Components/marks/action-mark/action-mark.component';
import { AddMarkComponent } from './Components/marks/add-mark/add-mark.component';
import { ShowMarkComponent } from './Components/marks/show-mark/show-mark.component';
import { AddStudentComponent } from './Components/student/add-student/add-student.component';
import { StudentListComponent } from './Components/student/student-list/student-list.component';
import { ViewStudentComponent } from './Components/student/view-student/view-student.component';
import { ConfirmationDialogComponent } from './Components/confirmation-dialog/confirmation-dialog.component';



const routes: Routes = [ 
//   { path: '', component: HomeComponent }, 
//   { path: 'about', component: AboutComponent }, 
//   { path: 'contact', component: ContactComponent }, 
//   { path: 'login', component: LoginComponent},
//   { path: 'register', component: RegisterComponent},

// { path: '', redirectTo: '/exam-marks', pathMatch: 'full' },

// { path: '', component: HomeComponent }, 
// { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//    { path: '', redirectTo: 'login', pathMatch: 'full' },
// { path: '', redirectTo: '/attendance', pathMatch: 'full' },


//   {path: '', redirectTo: 'login',pathMatch:'full'},
//   {path: 'login',           component: LoginComponent},
//   {path: 'register',        component: RegisterComponent},


// {path: '', redirectTo: 'login',pathMatch:'full'},
{path: 'login',           component: LoginComponent},
{path: 'register',        component: RegisterComponent},


{path: 'app-add-student',      component: AddStudentComponent},
{path: 'app-confirmation-dialog',          component: ConfirmationDialogComponent},
{path: 'app-student-list',     component: StudentListComponent},
{path: 'app-view-student',     component: ViewStudentComponent},
{path: 'viewStudent/:id', component: ViewStudentComponent},
{path: 'app-action-mark',      component: ActionMarkComponent},
{path: 'app-show-mark',        component: ShowMarkComponent},
{path: 'app-show-mark/:id',    component: ShowMarkComponent},
{path: 'app-add-mark',         component: AddMarkComponent},
{path: 'app-add-mark/:id',     component: AddMarkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
