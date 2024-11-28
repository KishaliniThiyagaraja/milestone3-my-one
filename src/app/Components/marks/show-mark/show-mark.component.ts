import { Component } from '@angular/core';
import { Mark } from '../../../modal/mark';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../Service/auth.service';
import { DataService } from '../../../Service/data.service';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-show-mark',
  templateUrl: './show-mark.component.html',
  styleUrl: './show-mark.component.css'
})
export class ShowMarkComponent {
  markObj: any;
  id: any;
  studentObj: any;

  constructor(private dataService: DataService, private route: ActivatedRoute, private auth: AuthService) { }

  markList: Mark[] = [];
  markObaj: Mark = {
   mark:'',
   markType:'',
   description:'',
   date:''
  }
  mark: string = '';
  description:string='';
  markType:string='';
  date:string='';


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.OnGotAllMarks();
    this.getMarkView();
    this.getStudentView();
  }

  OnGotAllMarks() {
    this.dataService.getAllMarks(this.id).subscribe(
      {
        next: (res) => this.markList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        }),
        error: (err) => console.log(err),
        complete: () => console.log("completed")
      });
  }
  getStudentView() {
    this.dataService.getStudentById(this.id).subscribe(data => {
      this.studentObj = data;
    })
  }

  getMarkView() {
    this.dataService.getMarksById(this.id).subscribe(data => {
      this.markObj = data;
      console.log(this.markObj);
    })
  }

  OnUserLogout(){
    this.auth.logout();
  }

  OnAddedMark() {
    if (this.mark == '') {
      console.log('Please select');
      return;
    }
    this.markObaj.mark = this.mark;
    this.markObaj.markType = this.markType;
    this.markObaj.description = this.description;
    this.dataService.addMark(this.markObaj, this.id);
    console.log(this.markObaj);
    //console.warn("Student added:" + this.studentObj.first_name + ' ' + this.studentObj.last_name)
  }
  OnDeletedMark(){
    this.dataService.deleteMark(this.markObaj,this.id);
    console.log('deleted:' + this.OnDeletedMark)
  }

}
