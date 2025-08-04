import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signupinterface } from '../interfaces/signupinterface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Logininterface } from '../interfaces/logininterface';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

isloggedin=new BehaviorSubject<boolean>(localStorage.getItem("application")?true:false);
  constructor(private httpclient:HttpClient,private router:Router){}
 signup(register:Signupinterface):Observable<any>
 {
   return this.httpclient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",register)
 }
  login(loginobj:Logininterface):Observable<any>
  {
    return this.httpclient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",loginobj)
  }

  loginout()
  {
  this.router.navigate(["/login"]);
  localStorage.removeItem("application");
  this.isloggedin.next(false);
  }

  ForgetPassword(form:Form):Observable<any>
  {
    return this.httpclient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",form)
  }
  verifycode(form:Form):Observable<any>
  {
    return this.httpclient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",form)
  }

  resetpassword(form:Form):Observable<any>
  {
    return this.httpclient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",form)
  }
}
