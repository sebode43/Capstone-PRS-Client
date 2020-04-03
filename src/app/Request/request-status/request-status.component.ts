import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {
  request: Request = new Request();
  users: User[] = [];
  message:string = "";

  save(): void{
    this.request.userId = Number(this.request.userId);
    this.requestsvc.change(this.request).subscribe(
      res => {
        this.request = res;
        console.debug("Request:", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {console.error("Error editing request:",err);
<<<<<<< HEAD
    if(this.request.status == "REJECTED" && this.request.rejectionReason == "")
=======
    if(this.request.status == "REJECTED" && this.request.rejectionReason == null)
>>>>>>> a0ba3f13cef311b4400021e1b92335fed4c52ae4
      this.message = "CANNOT REJECT WITHOUT A REJECTION REASON";
      return this.message;
    }
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
