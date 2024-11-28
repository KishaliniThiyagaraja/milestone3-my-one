import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { DataService } from '../../Service/data.service';
import { ConfirmationDialogService } from '../confirmation-dialog.service';
import { Student } from '../../modal/student';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent implements OnInit {
  [x: string]: any;

  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Input() btnOkText: string | undefined;
  @Input() btnCancelText: string | undefined;

  constructor(private activeModal: NgbActiveModal, private auth: AuthService, private dataService: DataService,
    private toastr: ToastrService, private confirmationDialogService: ConfirmationDialogService) { }
  studentsList: Student[] = [];

  selectedStudent: any;

  selectUser(Student: any) {
    this.selectedStudent = Student;
}

  ngOnInit(): void {
    this.OnGotAllStudents();
  }

  //  //notifications
  //  OnShowStudentDeleted() {
  //   this.toastr.showStudentDeleteSucces();
  // }
  showStudentDeleteSucces() {
    this.toastr.success('Student deleted successfully', 'Success');
  }
  

  OnGotAllStudents()  {

    this.dataService.getAllStudents().subscribe(
      {
      next: (res) => this.studentsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      }),
      error: (err) => console.log(err),   // errorHandler
      complete: () => console.log("completed")
    });
  }

  public decline() {
    this.activeModal.close(false);
  }

  // public accept(student: Student) {
  //   this.dataService.deleteStudent(student);
  //   this.OnShowStudentDeleted();
  //   this.activeModal.close(true);
  // }


  public async accept(student: Student) {
    try {
      await this.dataService.deleteStudent(student);
      this['OnShowStudentDeleted'](); // Show success notification
      this.activeModal.close(true);
    } catch (error) {
      console.error('Error deleting student', error);
      this.toastr.error('Failed to delete student', 'Error');
    }
  }
  

  public dismiss() {
    this.activeModal.dismiss();
  }

}
