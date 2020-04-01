import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu.class';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/system/system.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  menu: Menu;

  ngOnInit(): void {
      
  }

}
