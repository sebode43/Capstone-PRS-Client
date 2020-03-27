import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[] = [];
  save(): void{
    this.product.vendorId = Number(this.product.vendorId);
    this.productsvc.change(this.product).subscribe(
      res => {
        this.product = res;
        console.debug("Product:", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {console.error("Error editing product:",err);}
    );
  }

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res =>{
        this.vendors = res;
        console.debug("Vendor:", res);
      },
      err => {console.error("Error reading Vendor:", err);}
    );
    let id = this.route.snapshot.params.id
      this.productsvc.get(id).subscribe(
        res =>{
          this.product = res;
          console.debug("Product:", res);
        },
        err => {console.error("Error on Product:", err);}
      );
  }

}
