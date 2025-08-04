import { Component } from '@angular/core';
import { FormControl, FormGroup, PristineChangeEvent, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.css',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class ResetPasswordComponent {
constructor(private authservice:AuthService,private router:Router){}
   
forminvalidMesage="";
isloading=false;

resetpasswordgroup:FormGroup=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  newPassword:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z]{3,}\D[0-9]{3,}$/)])
})

handResetPassword()
{
  if(this.resetpasswordgroup.valid)
  {
    this.isloading=true;
  this.authservice.resetpassword(this.resetpasswordgroup.value).subscribe({
    next:()=>{
      this.isloading=false;
      this.router.navigate(["/login"])

    },
    error:(err)=>{
      this.isloading=false
      this.forminvalidMesage=err.error.message
    }
  })

  }
}
}
