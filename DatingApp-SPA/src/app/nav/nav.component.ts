import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { AlertifyService } from './../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any ={};
  constructor(private authService: AuthService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.Login(this.model).subscribe(next =>{
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
    }, () =>{
      this.router.navigate(['/members']);
    } );
  }

  LoggedIn(){
    return this.authService.LoggedIn();
  }

  Logout(){
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
