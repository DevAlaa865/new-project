import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.css',
    standalone: true,
    // imports:[RouterLink]
})
export class CategoriesComponent implements OnInit {

    gategorisService=inject(CategoriesService)
    allGategories:Category[]|null=[]
    ngOnInit(): void {
     this.gategorisService.getAllCategory().subscribe({

        next:(responce)=>{this.allGategories=responce.data
            console.log(responce)
        },
        error:(err)=>{console.log(err)}
     })
    }

}
