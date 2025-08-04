import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cartresponse } from '../interfaces/cartresponse';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  constructor(private httpclient :HttpClient) { }
  numberOfItemCart=new BehaviorSubject<number>(0);
// headers:any={token:localStorage.getItem("application")}
  AddproductToCart(id:string):Observable<any>
  {
       return this.httpclient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:id}
        // , {headers:{token:localStorage.getItem("application")!}}
       );
  }
  GetUserCarti():Observable<any>
  {
            return this.httpclient.get("https://ecommerce.routemisr.com/api/v1/cart")
              // ,{headers:{token:localStorage.getItem("application")!}});
          
  }
  RemoveSpecificItem(id : string):Observable<any>
  {
     return this.httpclient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
      // ,{        headers:{token:localStorage.getItem("application")!}}
     
    )
  }
  RemoveAllCart():Observable<any>
  {
    return this.httpclient.delete("https://ecommerce.routemisr.com/api/v1/cart"
      // ,{      headers:{token:localStorage.getItem("application")!}}
    )
  }
  updateCartQuantity(id:string,count:number):Observable<any>
  {
    return this.httpclient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count})
  }
  getupdatenumOfItemCard()
  {
    this.GetUserCarti().subscribe({
      next:(value:Cartresponse)=>{this.numberOfItemCart.next(value.numOfCartItems)}

    })
  }
}
