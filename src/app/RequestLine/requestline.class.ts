import { Product } from '../product/product.class';
import { Request } from '../request/request.class';

export class RequestLine{
    id: number = 0;
    requestId: number = null;
    productId: number = null;
    quantity: number = 1;
    request: Request = null;
    product: Product = null;
    
    constructor() {}
}