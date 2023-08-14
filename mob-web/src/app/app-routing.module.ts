import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'usersignup',component:UserSignUpComponent},
  {path:'userhome',component:UserHomeComponent},
  {path:'usercart',component:UserCartComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
