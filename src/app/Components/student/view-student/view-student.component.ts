import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../Service/auth.service';
import { Mark } from '../../../modal/mark';
import { DataService } from '../../../Service/data.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit {
  studentObj: any;
  markObj: any;
  id: any;

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

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getStudentView();
  }

  // getStudentView() {
  //   this.dataService.getStudentById(this.id).subscribe(data => {
  //     this.studentObj = data;
  //   })
  // }

  getStudentView() {
    this.dataService.getStudentById(this.id).subscribe((data: any) => {
      this.studentObj = data;
    })
  }


  OnUserLogout(){
    this.auth.logout();
  }
}
