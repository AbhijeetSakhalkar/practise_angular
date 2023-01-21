import { UserService } from '../service/user/user-service.service';
import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  private userData : any;

  ngOnInit(): void {
    this.userService.getAllData().subscribe(response => {
      this.userData = response;
      console.log(this.userData);
    });
  }

  updateName() {
    alert("Button on click event")
  }

}
