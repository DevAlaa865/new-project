import { Cartesponproduct } from "./cartesponproduct";

export interface Cartresponcedata {
    cartOwner:string,
    products:Cartesponproduct[],
    totalCartPrice:number,
    _id:string
}
