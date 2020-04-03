import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router} from '@angular/router';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  userId:number = 0;

  save(): void{
    this.request.userId = Number(this.request.userId);
    console.log(this.request);
    this.requestsvc.create(this.request).subscribe(
      res => {
        this.request = res;
        console.debug("Request:", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {console.error("Error creating request:",err);}
    );
  }

  constructor(
    private requestsvc: RequestService,
    private systemsvc: SystemService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.request.userId = this.systemsvc.user.id;
  }

}
