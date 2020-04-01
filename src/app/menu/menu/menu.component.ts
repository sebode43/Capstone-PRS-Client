import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/system/system.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [
    new Menu("Users", "/users/list", "The user list page"),
    new Menu("Vendors", "/vendors/list", "The vendor list page"),
    new Menu("Products", "/products/list", "The product list page"),
    new Menu("Requests", "/requests/list", "The request list page"),
    new Menu("Reviews", "/reviews/list", "The review list page"),
  ]

  user: User = new User();

  store(username:string, password:string) : any{
    this.usersvc.enter(username, password).subscribe(
      res => {
        this.systemsvc.user = this.user;
        this.user = res;
        console.debug("Login complete.", res);
      },
      err => {console.error("Error during login:",err);
      this.systemsvc.user = null;
    } 
    );
  }


  constructor(
    private systemsvc: SystemService,
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
  }

}
