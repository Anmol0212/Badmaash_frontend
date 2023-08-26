import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavCarousalComponent } from './nav-carousal/nav-carousal.component';
import { NewComponent } from './new/new.component';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  // { path: '', component: HeaderComponent},
  // {path: '', component: NavBarComponent},
  //{path: '', component: NavCarousalComponent},
  {path: '', component: HeaderComponent},
  {path: 'new', component: NewComponent},
  {path: 'product', component: ProductsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
