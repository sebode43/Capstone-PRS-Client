import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { RequestLine } from 'src/app/requestline/requestline.class';

@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestlineComponent implements OnInit {

  requestline: RequestLine = new RequestLine();
  request: Request = new Request();
  searchCriteria: string = "";
  requestId:number;

  delete(requeslne:RequestLine): void{
    this.requestlinesvc.remove(requeslne).subscribe(
      res => {
        console.debug("Requestline:", res);
        this.refresh();
      },
      err => {console.error("Error deleting requestline:",err);}
    );
  } 

  review(request: Request): void{
    if(request.status != "REVIEW"){
    request.status = "REVIEW";
    }if(request.total <= 50)
    request.status = "APPROVED";
    this.requestsvc.change(this.request).subscribe(
      res => {
        this.request = res;
        console.debug("Request Status Changed.", res);
      },
      err => {console.error("Error on request review status:",err);}
    );
  }

  refresh(): void {
    this.requestsvc.get(this.requestId).subscribe(
      res =>{
      this.request = res;
      console.debug("Request:", res);
    },
    err => {console.error("Error on Request Get", err);}
    );
  }

  constructor(
    private requestlinesvc: RequestlineService,
    private requestsvc: RequestService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.params.id;
      this.refresh();
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
