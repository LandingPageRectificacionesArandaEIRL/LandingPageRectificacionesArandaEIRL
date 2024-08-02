import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactComponent} from "./contact/contact.component";
import {ServiciosComponent} from "./servicios/servicios.component";
import {SalesComponent} from "./sales/sales.component";
import {ProductsComponent} from "./products/products.component";


export const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'about-us', pathMatch: 'full', component: AboutUsComponent},
  {path: 'services', pathMatch: 'full', component: ServiciosComponent},
  {path: 'sales', pathMatch: 'full', component: SalesComponent},
  {path: 'sales/:category', component: ProductsComponent },
  {path: 'contact-us', pathMatch: 'full', component: ContactComponent},
  {path: '*', pathMatch: 'full', redirectTo: 'home'}
];
