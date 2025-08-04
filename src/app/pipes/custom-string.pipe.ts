import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customString',
    standalone: true
})
export class CustomStringPipe implements PipeTransform {

  transform(value:string ,count:number=1 ) {
    return value.split(" ", count).join(" ");
  }

}
