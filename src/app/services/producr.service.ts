import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProducrService {

  constructor(private httpclient:HttpClient) { }

  getallproduct():Observable<any>
  {
    return this.httpclient.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  getspeceficproduct(id:string):Observable<any>
  {
      return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getallgategory():Observable<any>
  {
    return this.httpclient.get("https://ecommerce.routemisr.com/api/v1/categories")
  }
}
