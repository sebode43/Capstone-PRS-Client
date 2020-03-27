import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { User } from 'src/app/user/user.class';
import { RequestService } from '../request.service';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request = new Request();
  users: User[] = [];

  save(): void{
    this.request.userId = Number(this.request.userId);
    this.requestsvc.change(this.request).subscribe(
      res => {
        this.request = res;
        console.debug("Request:", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {console.error("Error editing request:",err);}
    );
  }

  constructor(
    private requestsvc: RequestService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res =>{
        this.users = res;
        console.debug("User:", res);
      },
      err => {console.error("Error reading User:", err);}
    );
    let id = this.route.snapshot.params.id
      this.requestsvc.get(id).subscribe(
        res =>{
          this.request = res;
          console.debug("Request:", res);
        },
        err => {console.error("Error on Request:", err);}
      );
  }

}
