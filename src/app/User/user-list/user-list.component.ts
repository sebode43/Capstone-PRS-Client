import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[] = [];
  searchCriteria:string = "";
  userstore: User = new User();

  constructor(
    private user: UserService,
    
    ) { }

  ngOnInit(): void {
    this.user.list().subscribe(
      res => {
        this.users = res;
        console.debug("Listed Users:", res);
      },
      err => {console.error(err);}

    );
     
  }

}
