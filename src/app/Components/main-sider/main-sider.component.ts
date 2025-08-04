import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-main-sider',
    templateUrl: './main-sider.component.html',
    styleUrl: './main-sider.component.css',
    standalone: true,
    imports: [CarouselModule]
})
export class MainSiderComponent {
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
      }
    },
    nav: true
  }
}
