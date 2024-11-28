import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './Layout/blank/blank.component';
import { StudentsComponent } from './Layout/students/students.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './Layout/blank/login/login.component';
import { RegisterComponent } from './Layout/blank/register/register.component';
import { HeaderComponent } from './Layout/students/header/header.component';
import { FooterComponent } from './Layout/students/footer/footer.component';
import { SectionComponent } from './Layout/students/section/section.component';

import { ManagerComponent } from './Layout/manager/manager.component';
import { LecturesComponent } from './Layout/lectures/lectures.component';
import { StaffComponent } from './Layout/staff/staff.component';
 import { HttpClientModule } from '@angular/common/http';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMarkComponent } from './Components/marks/add-mark/add-mark.component';
import { ShowMarkComponent } from './Components/marks/show-mark/show-mark.component';
import { ViewStudentComponent } from './Components/student/view-student/view-student.component';
import { StudentListComponent } from './Components/student/student-list/student-list.component';
import { ConfirmationDialogComponent } from './Components/confirmation-dialog/confirmation-dialog.component';
import { ActionMarkComponent } from './Components/marks/action-mark/action-mark.component';
import { AddStudentComponent } from './Components/student/add-student/add-student.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './modal/environment';





@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    StudentsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    ManagerComponent,
    LecturesComponent,
    StaffComponent,

    AboutComponent,
    HomeComponent,
    ContactComponent,
    AddMarkComponent,
    ActionMarkComponent,
    ShowMarkComponent,
    AddStudentComponent,
     StudentListComponent,
    ViewStudentComponent,
    ConfirmationDialogComponent,

  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(), 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


