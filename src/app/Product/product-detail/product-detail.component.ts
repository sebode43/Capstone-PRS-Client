import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();
  delete(): void{
    this.productsvc.remove(this.product).subscribe(
      res => {
        this.product = res;
        console.debug("Product deleted.", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {console.error("Cannot delete product.", err);}
    );
  }

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id
      this.productsvc.get(id).subscribe(
        res =>{
          this.product = res;
          console.debug("Product:", res);
        },
        err => {console.error("Error on Product-Detail Get", err);}
      );
  }

}
