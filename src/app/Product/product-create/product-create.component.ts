import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Vendor } from 'src/app/vendor/vendor.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[] = [];
  save(): void{
    this.product.vendorId = Number(this.product.vendorId);
    this.productsvc.create(this.product).subscribe(
      res => {
        this.product = res;
        console.debug("Product created.", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {console.error("Product could not be created.",err);}
    );
  }

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
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
  }
}
