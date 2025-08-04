import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ProducrService } from '../../services/producr.service';
import { Product } from '../../interfaces/product';
import { ProductComponent } from '../product/product.component';
import { SerchproductPipe } from '../../pipes/serchproduct.pipe';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    standalone: true,
    imports:[ProductComponent,SerchproductPipe,FormsModule]
})
export class ProductsComponent implements OnInit{

    constructor( private productService:ProducrService){}
   
seaechInput:WritableSignal<string>=signal("")
    productlist:WritableSignal<Product[]>=signal([])
 ngOnInit(): void {
    this.productService.getallproduct().subscribe({
        next:(response)=>{this.productlist.set(response.data)},
        error:()=>{}
    })
    }
    
}
