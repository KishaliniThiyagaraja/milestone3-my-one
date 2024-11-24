import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './Components/manager/attendance/attendance.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MarksComponent } from './Components/manager/marks/marks/marks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    AttendanceComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    MarksComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
