import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestlineComponent implements OnInit {

  request: Request = new Request();
  searchCriteria: string = "";

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id
    this.requestsvc.get(id).subscribe(
      res =>{
        this.request = res;
        console.debug("Request:", res);
      },
      err => {console.error("Error on RequestLine Get", err);}
    );
  }

}
