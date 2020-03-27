import { User } from '../user/user.class';

export class Request{
    id:number = 0;
    description:string = "";
    justification:string = "";
    rejectionReason:string;
    deliveryMode:string = "Pickup";
    status:string = "NEW";
    total:number = 0;
    userId:number = null;
    user: User = null;

    constructor(){}
}