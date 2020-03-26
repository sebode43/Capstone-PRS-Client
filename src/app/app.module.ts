import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //two-way binding
import { HttpClientModule } from '@angular/common/http'; //async
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { SortPipe } from './pipes/sort.pipe';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { UserSearchPipe } from './user/user-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    SortPipe,
    MenuComponent,
    MenuItemComponent,
    UserSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
