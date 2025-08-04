import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { passwordmatch } from '../../customvaldation/password-validate';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class SignUpComponent {

  constructor(private hhttpclientServic: AuthService, private router: Router) { }


candeactivate()
{
    if (this.FormGroupObj.dirty  && this.issubmitted!==true) {
           return window.confirm("are u sure u want to leave login form")
    }
    return true;
}
  // hhtpunsubscib!:Subscription;
  issubmitted=false;
  forminvalidMesage = "";
  isloading = false;

  FormGroupObj: FormGroup = new FormGroup({

    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z]{3,}\D[0-9]{3,}$/)]),
    rePassword: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z]{3,}\D[0-9]{3,}$/)]),
    phone: new FormControl("", [Validators.required])
  }, { validators: passwordmatch })


  handsubmit() {
    console.log(this.FormGroupObj)
    if (this.FormGroupObj.valid) {

      this.isloading = true;
      this.issubmitted=true;

      this.hhttpclientServic.signup(this.FormGroupObj.value).subscribe({
        next: (data) => {
          this.router.navigate(["/login"])

          this.isloading = false;
        },
        error: (err) => {
          this.forminvalidMesage = err.error.message;
          this.isloading = false;
        }
      })
    }





  }
  // ngOnDestroy(): void {
  //    this.hhtpunsubscib?.unsubscribe();
  //   }

}

