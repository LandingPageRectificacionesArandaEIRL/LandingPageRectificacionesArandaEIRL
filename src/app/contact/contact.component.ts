import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        MatButton
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
