import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-verify-code',
    templateUrl: './verify-code.component.html',
    styleUrl: './verify-code.component.css',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class VerifyCodeComponent {
  constructor(private authservice:AuthService,private router:Router){}

  forminvalidMesage="";
  isloading=false;
   VerifyCodeGroup:FormGroup=new FormGroup({
   
    resetCode:new FormControl("",Validators.required)

   })
handVerifyCode()
{
  if(this.VerifyCodeGroup.valid)
  {
    this.isloading=true;
     this.authservice.verifycode(this.VerifyCodeGroup.value).subscribe({
      next:()=>{

        this.isloading=false;
        this.router.navigate(["/Reset-Password"])
      },
      error:(err)=>{
        this.isloading=false;
        this.forminvalidMesage=err.error.message
      }
     })


  }
}

}
