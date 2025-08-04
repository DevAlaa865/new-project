import { Component, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Route, Router, RouterLink } from '@angular/router';
import { CartServicesService } from '../../services/cart-services.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink]
})
export class LoginComponent {
  constructor(private loginservice: AuthService, private router: Router,private crtservice:CartServicesService) { }
candeactivate()
{
    if (this.LoginFormObj.dirty  && this.issubmitted()!==true) {
           return window.confirm("are u sure u want to leave login form")
    }
    return true;
}
issubmitted:WritableSignal<boolean>=signal(false);
  LoginFormObj: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  })
  forminvalidMesage:WritableSignal<string> = signal("");
  isloading:WritableSignal<boolean> = signal(false);
  handLogin() {

    if (this.LoginFormObj.valid) {

      this.isloading.set(true);
      this.issubmitted.set(true);
      this.loginservice.login(this.LoginFormObj.value).subscribe({
        next: (respone) => {
          this.isloading.set(false);
    
          this.router.navigate(["/home"]);
          localStorage.setItem("application", (respone.token))
          this.loginservice.isloggedin.next(true);
              this.crtservice.getupdatenumOfItemCard()
        },
        error: (err) => {
          this.forminvalidMesage = err.error.message;
          this.isloading.set(false);

        }
      })
    }

  }
}
