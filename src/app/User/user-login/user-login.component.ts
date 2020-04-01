import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  message:string = "";

  login(username:string, password:string) : any{
    this.usersvc.enter(username, password).subscribe(
      res => {
        this.systemsvc.user = this.user;
        this.user = res;
        console.debug("Login complete.", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {console.error("Error during login:",err);
      this.message = "USER NOT FOUND";
      this.systemsvc.user = null;
      return this.message;
    } 
    );
  }

  constructor(
    private usersvc: UserService,
    private systemsvc: SystemService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
