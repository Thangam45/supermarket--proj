import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CartComponent } from './pages/cart/cart.component';
import { CONTACTComponent } from './pages/contact/contact.component';
import { HOMEComponent } from './pages/home/home.component';
import { MENUComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomesComponent } from './pages/homes/homes.component';
// import { LogInComponent } from './pages/log-in/log-in.component';

const routes: Routes = [
  {path:'',component:HOMEComponent},
  {path:'Homes',component:HomesComponent},
  {path:'menu',component:MENUComponent},
  {path:'menu/:id',component: MenupageComponent },
  {path:'about',component:AboutComponent},
  {path:'blogs',component:BlogsComponent},
   {path:'produts',component: ProductsComponent}, 
  {path:'contact',component:CONTACTComponent},
  // {path:'LogIn',component:LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
