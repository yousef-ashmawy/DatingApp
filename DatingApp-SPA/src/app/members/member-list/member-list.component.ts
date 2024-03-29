import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private alertif: AlertifyService) { }

  ngOnInit() {
    this.LoadUsers();
  }

  LoadUsers(){
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users.$values;
      console.log(this.users);
    }, error => {
      this.alertif.error(error);
    })
  }

}
