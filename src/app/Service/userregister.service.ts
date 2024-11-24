import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
  constructor(private http:HttpClient) {
  }
  AddRegisterUser(UserRegister:IUserRegister){
   return this.http.post('',UserRegister)
  }
}

export interface IUserRegister{
id:number;
fullName:string;
email:string;
password:string;
role:any;
}