import { Component, Inject, inject, OnInit } from '@angular/core';
import { ProducrService } from '../../services/producr.service';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';
import { MainSiderComponent } from '../main-sider/main-sider.component';
import { CategoriesSliderComponent } from '../categories-slider/categories-slider.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { SerchproductPipe } from '../../pipes/serchproduct.pipe';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true,
    imports: [MainSiderComponent, CategoriesSliderComponent, ReactiveFormsModule, FormsModule, ProductComponent, SerchproductPipe]
})
export class HomeComponent implements OnInit {
 seaechInput:string='';
  productlist: Product[] = [];
  errmessage = "";
  productservise = inject(ProducrService)

  ngOnInit(): void {
    this.productservise.getallproduct().subscribe({
      next: (respone) => {
        console.log(respone)
        this.productlist = respone.data;
      },
      error: (err) => {
        this.errmessage = err.error.message;
      }
    })
  }

}
