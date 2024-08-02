import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {MatButton} from "@angular/material/button";
import {AttentionClientComponent} from "../attention-client/attention-client.component";
import {WhatsappButtonComponent} from "../whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    MatButton,
    AttentionClientComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
