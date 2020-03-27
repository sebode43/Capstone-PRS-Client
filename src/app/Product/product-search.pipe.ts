import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchCriteria:string=""): Product[] {
    if(searchCriteria === "") return products;
    let criteria = searchCriteria.toLowerCase();
    let selProducts:Product[] = [];
    for(let product of products){
      if(product.partNbr.toLowerCase().includes(criteria) || product.name.toLowerCase().includes(criteria)
      || product.price.toString().includes(criteria) || product.unit.toLowerCase().includes(criteria)
      || product.vendorId != null && product.vendorId.toString().includes(criteria)){
        selProducts.push(product);
      }
    }
    
    return selProducts;
  }

}
