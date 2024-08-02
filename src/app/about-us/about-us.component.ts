import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {MatButton} from "@angular/material/button";
import {AttentionClientComponent} from "../attention-client/attention-client.component";
import {WhatsappButtonComponent} from "../whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    MatButton,
    AttentionClientComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
