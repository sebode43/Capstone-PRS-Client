import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [
    new Menu("Users", "/user/list", "The user list page"),
    new Menu("Vendors", "/vendor/list", "The vendor list page"),
    new Menu("Products", "/product/list", "The product list page"),
    new Menu("Requests", "/request/list", "The request list page"),
    new Menu("Requestlines", "/requestline/list", "The requestline list page"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
