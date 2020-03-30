import { Pipe, PipeTransform } from '@angular/core';
import { RequestLine } from './requestline.class';

@Pipe({
  name: 'requestlineSearch'
})
export class RequestlineSearchPipe implements PipeTransform {

  transform(requestlines: RequestLine[], searchCriteria:string = ""): RequestLine[] {
    if(searchCriteria === "") return requestlines;
    let criteria = searchCriteria.toLowerCase();
    let selRequestLines: RequestLine[] = [];
    for(let requestline of requestlines){
      if (requestline.quantity.toString().includes(criteria) 
      || requestline.requestId != null && requestline.requestId.toString().includes(criteria)
      || requestline.productId != null && requestline.productId.toString().includes(criteria)){
        selRequestLines.push(requestline);
      }
    }
    return selRequestLines;
  }

}
