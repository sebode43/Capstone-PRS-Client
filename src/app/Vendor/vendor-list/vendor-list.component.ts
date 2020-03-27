import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors:Vendor[] = [];
  searchCriteria:string = "";

  constructor(private vendor: VendorService) { }

  ngOnInit(): void {
    this.vendor.list().subscribe(
      res => {
        this.vendors = res;
        console.debug("Listed Vendors:", res);
      },
      err => {console.error(err);}
    );
  }

}
