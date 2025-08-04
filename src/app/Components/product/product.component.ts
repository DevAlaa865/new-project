import { Component, inject, Input } from '@angular/core';
import { ProducrService } from '../../services/producr.service';
import { Product } from '../../interfaces/product';
import { CartServicesService } from '../../services/cart-services.service';
import { Router, RouterLink } from '@angular/router';
import { Cartresponse } from '../../interfaces/cartresponse';
import { UpperCasePipe } from '@angular/common';
import { CustomStringPipe } from '../../pipes/custom-string.pipe';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    standalone: true,
    imports: [RouterLink, UpperCasePipe, CustomStringPipe]
})
export class ProductComponent {
 
constructor(private router:Router){}
  cartservice=inject(CartServicesService)

  @Input({required:true}) product!:Product


  AddTocart(id:string)
  {
           this.cartservice.AddproductToCart(id).subscribe({
            next:(respone:Cartresponse)=>{
               this.cartservice.numberOfItemCart.next(respone.numOfCartItems)
        
              //  this.router.navigate(["/cart"]);
            },
            error:(err)=>{
              console.log(err)
            }
           })
  }
}
