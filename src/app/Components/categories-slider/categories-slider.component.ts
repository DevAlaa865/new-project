import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { ProducrService } from '../../services/producr.service';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-categories-slider',
    templateUrl: './categories-slider.component.html',
    styleUrl: './categories-slider.component.css',
    standalone: true,
    imports: [CarouselModule, RouterLink]
})
export class CategoriesSliderComponent implements OnInit {

   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
constructor(private productservice:ProducrService){}
  
  categories:Category[]=[];
ngOnInit(): void {
   this.productservice.getallgategory().subscribe({
    next:(responce)=>{
      this.categories=responce.data;
    }
   })
  }


}
