import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-servicios',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
