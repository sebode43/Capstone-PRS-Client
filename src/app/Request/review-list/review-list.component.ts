import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  requests:Request[] = [];
  searchCriteria: string = "";
  requestlist: Request = new Request();
  userId: number;
  constructor(private request: RequestService) { }

  ngOnInit(): void {
    this.request.list().subscribe(
      res => {
        this.requests = res;
        console.debug("Listed Requests:", res);
      },
      err => {console.error(err);}
    );
  }


}
