import { Component, Input, input, OnInit, signal, WritableSignal } from '@angular/core';
import { CartServicesService } from '../../services/cart-services.service';
import { Router, RouterLink } from '@angular/router';
import { Cartresponse } from '../../interfaces/cartresponse';
import { count, subscribeOn } from 'rxjs';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    standalone: true,
    imports: [RouterLink]
})
export class CartComponent implements OnInit {
  // @Input() id!: string;
  // id=input<string>("")
  id:WritableSignal<string>=signal("")
  constructor(private cartservice: CartServicesService) { }
  
  cartdetails: Cartresponse | null = null;
  iscartempty = false;
  messagnodata: string | null = ""
  ngOnInit(): void {

    this.cartservice.GetUserCarti().subscribe({
      next: (response) => {
        this.cartdetails = response;
        console.log(this.cartdetails)

        this.cartdetails?.numOfCartItems == 0 ? this.iscartempty = true : this.iscartempty = false
        //  if (this.cartdetails?.numOfCartItems==0?this.iscartempty=true:this.iscartempty=false) {} 
      },
      error: (err) => {
        console.log(err)
      }
    })


  }
  removespecificItem(id: string) {
    this.cartservice.RemoveSpecificItem(id).subscribe({
      next: (response:Cartresponse) => {
        this.cartdetails = response;
        this.cartservice.numberOfItemCart.next(response.numOfCartItems)
      },
      error: (err) => { console.log(err) }
    })
  }
  RemoveAll() {
    this.cartservice.RemoveAllCart().subscribe({
      next: (responce) => {
        this.cartdetails = null;
        this.iscartempty = true;

          this.cartservice.numberOfItemCart.next(0)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  updateQuantity(id: string, count: number) {
    this.cartservice.updateCartQuantity(id, count).subscribe(
      {
       next:(respone:Cartresponse)=>{
         this.cartdetails=respone;
        //  this.cartservice.numberOfItemCart.next(respone.numOfCartItems)
       },
       error:(err)=>{console.log(err)}
      }
    )
  }

}
