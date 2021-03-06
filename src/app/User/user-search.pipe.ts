import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria:string = ""): User[] {
    if(searchCriteria === "") return users;
    let criteria = searchCriteria.toLowerCase();
    let selUsers: User[] = [];
    for(let user of users){
      if(user.firstname.toLowerCase().includes(criteria) || user.lastname.toLowerCase().includes(criteria) 
      || user.phone != null && user.phone.includes(criteria) || user.email != null && user.email.toLowerCase().includes(criteria)){
        selUsers.push(user);
      }
    }
    return selUsers;
  }

}
