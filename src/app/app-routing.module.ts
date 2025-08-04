import { NgModule } from '@angular/core';
import { RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { RegisterComponent } from './Components/register/register.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ProductsComponent } from './Components/products/products.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { verifyHostBindings } from '@angular/compiler';
import { VerifyCodeComponent } from './Components/verify-code/verify-code.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { authGardGuard } from './Guards/auth-gard.guard';
import { noAuthGardsGuard } from './Guards/no-auth-gards.guard';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ShippingAddressComponent } from './Components/shipping-address/shipping-address.component';
import { OrdersComponent } from './Components/orders/orders.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", canActivate: [authGardGuard], component: HomeComponent },
  { path: "cart", canActivate: [authGardGuard], component: CartComponent },
  {path:"product-details/:id",component:ProductDetailsComponent},
    {path:"shipping-address/:id/:type",component:ShippingAddressComponent},
    {path:"allorders",component:OrdersComponent},
  { path: "login", canDeactivate: [noAuthGardsGuard], component: LoginComponent },
  { path: "register", canDeactivate: [noAuthGardsGuard], component: RegisterComponent },
  { path: "signUp", canDeactivate: [noAuthGardsGuard], component: SignUpComponent },
  { path: "brands", canActivate: [authGardGuard], component: BrandsComponent },
  { path: "Categories", canActivate: [authGardGuard], component: CategoriesComponent },
  { path: "products", canActivate: [authGardGuard], component: ProductsComponent },
  { path: "Forget-Password", component: ForgetPasswordComponent },
  { path: "Verify-Code", component: VerifyCodeComponent },
  { path: "Reset-Password", component: ResetPasswordComponent },
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
