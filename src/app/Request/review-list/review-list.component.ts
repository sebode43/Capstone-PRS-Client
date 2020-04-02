import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  requests:Request[] = [];
  request: Request = new Request();
  searchCriteria: string = "";
  requestlist: Request = new Request();
  user:User;

  sortRequests(): void{
     this.request.userId = Number(this.request.userId);
    this.requestsvc.reviewlist(this.user.id).subscribe(
      res => {
        if(this.request.userId != this.user.id){
        this.requests = res;
        console.debug("Request:", res);}
      },
      err => {console.error("Error getting requests to review:",err);}
    );
  }

  constructor(
    private requestsvc: RequestService,
    private systemsvc: SystemService,
    ) { }

  ngOnInit(): void {
    this.user = this.systemsvc.user;
    this.sortRequests();
    
  }


}
