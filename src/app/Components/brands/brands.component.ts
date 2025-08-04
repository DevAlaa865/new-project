import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../interfaces/brand';

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrl: './brands.component.css',
    standalone: true
})
export class BrandsComponent implements OnInit {
    brandservice=inject(BrandService)
    brandList:Brand[]=[]
    ngOnInit(): void {
       this.brandservice.getAllBrand().subscribe({
        next:(responce)=>{this.brandList=responce.data},
        error:()=>{}
       })
    }

}
