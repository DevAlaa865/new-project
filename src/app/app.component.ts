import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService, NgxSpinnerComponent } from 'ngx-spinner';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [NavbarComponent, RouterOutlet, NgxSpinnerComponent]
})
export class AppComponent {
// constructor(private spinner: NgxSpinnerService) {}

//   ngOnInit() {
//     /** spinner starts on init */
//     this.spinner.show();

//     setTimeout(() => {
//       /** spinner ends after 5 seconds */
//       this.spinner.hide();
//     }, 5000);
//   }
 }
