import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor: Vendor = new Vendor();
  delete(): void{
    this.vendorsvc.remove(this.vendor).subscribe(
      res => {
        this.vendor = res;
        console.debug("Vendor deleted.", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err => {console.error("Cannot delete vendor.", err);}
    );
  }

  constructor(
    private route: ActivatedRoute,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id
      this.vendorsvc.get(id).subscribe(
        res =>{
          this.vendor = res;
          console.debug("Vendor:", res);
        },
        err => {console.error("Error on Vendor-Detail Get", err);}
      );
  }

}
