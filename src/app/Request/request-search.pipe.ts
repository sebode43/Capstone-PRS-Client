import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria:string = ""): Request[] {
   if(searchCriteria === "") return requests;
   let criteria = searchCriteria.toLowerCase();
   let selRequests: Request[] = [];
  for(let request of requests){
    if(request.description.toLowerCase().includes(criteria) || request.justification.toLowerCase().includes(criteria)
    || request.deliveryMode.toLowerCase().includes(criteria) || request.status.toLowerCase().includes(criteria)
    || request.total.toString().includes(criteria)
    || request.userId != null && request.userId.toString().includes(criteria)){
      selRequests.push(request);
    }
  }
    return selRequests;
  }

}
