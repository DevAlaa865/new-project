import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProducrService } from '../../services/producr.service';
import { Product } from '../../interfaces/product';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    standalone: true,
    imports: [CarouselModule, RouterLink]
})
export class ProductDetailsComponent implements OnChanges {
    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
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
  
  @Input() id!: string|null;
  productdetail:Product | null=null;

  constructor(private productservice: ProducrService) { }
  ngOnChanges(changes: SimpleChanges): void {
    
     
       if(this.id!=null && changes['id'].currentValue!=changes['id'].previousValue)
     
    {
    this.productservice.getspeceficproduct(this.id).subscribe({
      next:(value)=> {
      this.productdetail=value.data

      },
      error: (err) => {
        console.log(err)
      }
    })
    }
  }
  




}
