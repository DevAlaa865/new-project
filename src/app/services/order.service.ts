import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpclient:HttpClient) { }



  CheckoutSession(form:any,cardid:string):Observable<any>
  {
            return this.httpclient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardid}?url=http://localhost:4200`,
              {
                shippingAddress:form
              }
            )
  }
  paymentCash(form:any,cardid:string):Observable<any>
  {
    return this.httpclient.post(`https://ecommerce.routemisr.com/api/v1/orders/${cardid}`,{
      shippingAddress:form
    })
  }
}
