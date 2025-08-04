import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-forget-password',
    templateUrl: './forget-password.component.html',
    styleUrl: './forget-password.component.css',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class ForgetPasswordComponent {

constructor( private authservice:AuthService,private router:Router){}
forminvalidMesage="";
isloading=false;
ForgetPasswordGroup:FormGroup=new FormGroup({
      email:new FormControl("",[Validators.required,Validators.email])
})

handForgetPassword()
{
  if(this.ForgetPasswordGroup.valid)
  { 
    this.isloading=true;
      this.authservice.ForgetPassword(this.ForgetPasswordGroup.value).subscribe({

        next:(response)=>{
          this.isloading=false;
              this.router.navigate(["/Verify-Code"])

        },
        error:(err)=>{
          this.isloading=false;
          this.forminvalidMesage=err.error.message;
        }
      })

  }
 
}

}