import { afterNextRender, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CartServicesService } from '../../services/cart-services.service';
import { tick } from '@angular/core/testing';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    standalone: true,
    imports: [RouterLink, RouterLinkActive]
})
export class NavbarComponent implements OnInit {

 isloading=false;
 islogginin=false;
constructor(private logout:AuthService, private cartservice:CartServicesService){}
 numberOfItemCart:number=0;


 ngOnInit(): void {
    this.logout.isloggedin.subscribe({
      next:(value)=>{this.islogginin=value

      }
      
    })
    this.cartservice.numberOfItemCart.subscribe({
      next:(value)=>{this.numberOfItemCart=value}
    })
   this.cartservice.getupdatenumOfItemCard()
    
  }
  loginout()
 {
  this.logout.loginout();
  
 }
 

}
