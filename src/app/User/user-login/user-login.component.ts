import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  login(username:string, password:string) : any{
    if(username === this.user.username && password === this.user.password) {
      return this.user;
    }
    if(username != this.user.username || password != this.user.password){
      let fail = "USER NOT FOUND";
      return fail;
    }
    this.usersvc.get(this.user).subscribe(
      res => {
        this.user = res;
        console.debug("Login complete.", res);
        this.router.navigateByUrl("/users/list");
      },
      err => {console.error("Error editing user:",err);}
    );
  }

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    /*let username = this.route.snapshot.params.username;
    this.usersvc.get(username).subscribe(
      res =>{
        this.user = res;
        console.debug("User:", res);
      },
      err => {console.error("Error on username:", err);}
    );
    let password = this.route.snapshot.params.password;
    this.usersvc.get(password).subscribe(
      res =>{
        this.user = res;
        console.debug("User:", res);
      },
      err => {console.error("Error on password:", err);}
    );*/
  }

}
