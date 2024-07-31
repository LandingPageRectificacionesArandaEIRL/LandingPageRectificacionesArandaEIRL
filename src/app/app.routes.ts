import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactComponent} from "./contact/contact.component";


export const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'contact', pathMatch: 'full', component: ContactComponent},
  {path: 'about-us', pathMatch: 'full', component: AboutUsComponent},
  {path: '*', pathMatch: 'full', redirectTo: 'home'}
];
