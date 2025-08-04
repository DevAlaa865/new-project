import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService  {

  constructor(private httpclient:HttpClient) { }
 

  getAllCategory():Observable<any>
  {
    return this.httpclient.get("https://ecommerce.routemisr.com/api/v1/categories")
  }
}
