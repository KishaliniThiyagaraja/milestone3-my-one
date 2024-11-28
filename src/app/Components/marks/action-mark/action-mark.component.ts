import { Component } from '@angular/core';
import { Student } from '../../../modal/student';
import { AuthService } from '../../../Service/auth.service';
import { DataService } from '../../../Service/data.service';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../Service/toast.service';



@Component({
  selector: 'app-action-mark',
  templateUrl: './action-mark.component.html',
  styleUrl: './action-mark.component.css'
})
export class ActionMarkComponent {
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

  mark: string = '';


  constructor(private auth: AuthService, private dataService : DataService, private toastr: ToastService) { }

  ngOnInit(): void {
    this.OnGotAllStudents();
  }

  OnGotAllStudents()  {

    this.dataService.getAllStudents().subscribe(
      {
      next: (res: any[]) => this.studentsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      }),
      error: (err: any) => console.log(err),   // errorHandler
      complete: () => console.log("completed")
    });
  }

  OnUserLogout() {
    this.auth.logout();
  }

  OnResetedForm(){
    this.mark = ''
  }

  OnAddedMark() {
    if (this.mark == '') {
      console.log('Please select');
      return;
    }
    this.studentObj.mark = this.mark;
    this.dataService.addStudent(this.studentObj);
    this.OnResetedForm();
    //console.warn("Student added:" + this.studentObj.first_name + ' ' + this.studentObj.last_name)
  }//ocena sie dodaje wraz ze zmienna ale tworzy sie nowy uzytkownik    PROBLEM
}
