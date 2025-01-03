import { Component, OnInit } from '@angular/core';
import { Student } from '../../../modal/student';
import { AuthService } from '../../../Service/auth.service';
import { DataService } from '../../../Service/data.service';
import 'ngx-toastr/toastr';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../Service/toast.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit {

  studentsList: Student[] = [];
  studentObj: Student = {
    id: '',
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    phone_number: '',
    gender: '',
    image: '',
    profession: '',
    location: '',
    mark: ''
  };
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  age: string = '';
  email: string = '';
  phone_number: string = '';
  gender: string = '';
  image: string = '';
  proffesion: string = '';
  location: string = '';
  mark: string = '';


  constructor(private auth: AuthService, private dataService: DataService, private toastr: ToastService) { }

  //notifications

  OnShowAddedStudentSuccess() {
    this.toastr.showStudentAddSucces();
  }

  OnShowAddedStudentWarning() {
    this.toastr.showAddStudentWarning();
  }

  ngOnInit(): void {

  }
  OnUserLogout() {
    this.auth.logout();
  }

  OnResetedForm(){
    this.first_name = '',
    this.last_name = '',
    this.age = '',
    this.email = '',
    this.phone_number = ''
    this.gender = ''
    this.image = ''
    this.proffesion = ''
    this.location = ''
  }

  OnAddedStudent() {
    if (this.first_name == '' || this.last_name == '' || this.age == '' || this.email == '' || this.phone_number == '' || this.gender == '' || this.image == '' || this.proffesion == ''  || this.location == '' ) {
      this.OnShowAddedStudentWarning();
      return;
    }
    this.studentObj.id = '';
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.studentObj.age = this.age;
    this.studentObj.email = this.email;
    this.studentObj.phone_number = this.phone_number;
    this.studentObj.gender = this.gender;
    this.studentObj.image = this.image;
    this.studentObj.profession = this.proffesion;
    this.studentObj.location = this.location;

    this.dataService.addStudent(this.studentObj);
    this.OnShowAddedStudentSuccess();
    this.OnResetedForm();
    //console.warn("Student added:" + this.studentObj.first_name + ' ' + this.studentObj.last_name)
  }
}
