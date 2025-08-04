import { Component, inject, Input, input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CartServicesService } from '../../services/cart-services.service';

@Component({
    selector: 'app-shipping-address',
    templateUrl: './shipping-address.component.html',
    styleUrl: './shipping-address.component.css',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class ShippingAddressComponent {

  shippingaddressForm = new FormGroup({
    details: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required)
  })

  orderservices = inject(OrderService) 
Cartservices = inject(CartServicesService)
  router = inject(Router)
  @Input() id!: string;
  @Input() type!: string

  RedirectToUrlForm(url: string) {
    window.location.href = url;
  }

  checksession() {
    if(this.type=='card')
    {
  this.orderservices.CheckoutSession(this.shippingaddressForm.value, this.id).subscribe({
      next: (responce) => {
        this.Cartservices.numberOfItemCart.next(0)
        this.RedirectToUrlForm(responce.session.url)
      },
      error: (err) => { console.log(err) }
    })
  }
  
  else if(this.type=='cash')
  {
 this.orderservices.paymentCash(this.shippingaddressForm.value, this.id).subscribe(
    {
      next: () => {
         this.Cartservices.numberOfItemCart.next(0)
        this.router.navigate(["/allorders"])
      },
      error: () => {
        this.router.navigate(["cart"])
      }
    }
  )
  }
}
}
