import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute } from '@angular/router';

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

  sortRequests(): void{
    this.requestsvc.reviewlist(this.request.userId).subscribe(
      res => {
        this.request = res;
        console.debug("Request:", res);
      },
      err => {console.error("Error editing request:",err);}
    );
  }


  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.requestsvc.list().subscribe(
      res => {
        this.requests = res;
        console.debug("Listed Requests:", res);
      },
      err => {console.error(err);}
    );
  }


}
