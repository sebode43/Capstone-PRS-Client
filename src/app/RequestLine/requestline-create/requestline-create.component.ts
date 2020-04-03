import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { Request } from 'src/app/request/request.class';
import { RequestlineService } from '../requestline.service';
import { ProductService } from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: RequestLine = new RequestLine();
  request: Request = new Request();
  requestId: number;
  products: Product[] = [];

  save(): void{
    this.requestline.requestId = Number(this.requestId);
    this.requestline.productId = Number(this.requestline.productId);
    console.log(this.requestline);
    this.requestlinesvc.create(this.requestline).subscribe(
      res => {
        console.debug("Requestline:", res);
        this.router.navigateByUrl(`/requests/requestline/${this.requestline.requestId}`);
      },
      err => {console.error("Error creating requestline:",err);}
    );
  } 
    

  constructor(
    private requestlinesvc: RequestlineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      res =>{
        this.products = res;
        console.debug("Product:", res);
      },
      err => {console.error("Error reading Product:", err);}
    );
    this.requestId = this.route.snapshot.params.requestId;

  }

}
