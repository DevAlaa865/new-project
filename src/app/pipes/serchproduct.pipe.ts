import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
    name: 'serchproduct',
    standalone: true
})
export class SerchproductPipe implements PipeTransform {

  transform(value:Product[],term:string='') {
    return value.filter((product)=>product.title.toLowerCase().includes(term.toLowerCase()));
  }

}
