import { Component, OnInit } from '@angular/core';
import { RequestlineService } from '../requestline.service';
import { RequestService } from 'src/app/request/request.service';
import { ProductService } from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLine } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { Request } from 'src/app/request/request.class';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline: RequestLine = new RequestLine();
  requests: Request[] = [];
  products: Product[] = [];

  save(): void{
    this.requestline.requestId = Number(this.requestline.requestId);
    this.requestline.productId = Number(this.requestline.productId);
    this.requestlinesvc.change(this.requestline).subscribe(
      res => {
        console.debug("Requestline:", res);
        this.router.navigateByUrl(`/requests/requestline/${this.requestline.requestId}`);
      },
      err => {console.error("Error editing requestline:",err);}
    );
  }  

  constructor(
    private requestlinesvc: RequestlineService,
    private requestsvc: RequestService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      res =>{
        this.products = res;
        console.debug("Product:", res);
      },
      err => {console.error("Error reading Product:", err);}
    );
    this.requestsvc.list().subscribe(
      res =>{
        this.requests = res;
        console.debug("Request:", res);
      },
      err => {console.error("Error reading Request:", err);}
    );
    let id = this.route.snapshot.params.id
      this.requestlinesvc.get(id).subscribe(
        res =>{
          this.requestline = res;
          console.debug("Requestline:", res);
        },
        err => {console.error("Error on Request:", err);}
      );
  }

}
