import { Component, OnInit } from '@angular/core';
import { RequestlineService } from '../requestline.service';
import { RequestService } from 'src/app/request/request.service';
import { ProductService } from 'src/app/product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestLine } from '../requestline.class';

@Component({
  selector: 'app-requestline-delete',
  templateUrl: './requestline-delete.component.html',
  styleUrls: ['./requestline-delete.component.css']
})
export class RequestlineDeleteComponent implements OnInit {

  requestline: RequestLine = new RequestLine();

  delete(): void{
    this.requestlinesvc.remove(this.requestline).subscribe(
      res => {
        console.debug("Requestline:", res);
        this.router.navigateByUrl(`/requests/requestline/${this.requestline.requestId}`);
      },
      err => {console.error("Error editing requestline:",err);}
    );
  } 

  constructor(
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id
      this.requestlinesvc.get(id).subscribe(
        res =>{
          this.requestline = res;
          console.debug("RequestLine:", res);
        },
        err => {console.error("Error on RequestLine Get", err);}
      );
  }

}
