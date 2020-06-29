import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  allUser: Object;
  isEdit = false;
  userObj={
    name: '',
    mobile: '',
    email:'',
    password:'',
    id:''
  }

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.getLatestUser()
  }

  addUser(formObj){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((response)=>{
      this.getLatestUser();
    })
  }

  getLatestUser(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser = response
    })
  }
  editUser(user){
    debugger
    this.isEdit = true
    this.userObj = user;
  }

  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }

  updateUser(user){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }
}
