import { Cartresponcedata } from "./cartresponcedata";

export interface Cartresponse {
    cartId:string,
    data:Cartresponcedata,
    numOfCartItems:number,
    statu:string
}
