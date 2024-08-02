import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatAnchor, MatButton} from "@angular/material/button";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {AttentionClientComponent} from "../attention-client/attention-client.component";
import {WhatsappButtonComponent} from "../whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgOptimizedImage,
    MatToolbarModule,
    MatAnchor,
    MatButton,
    FooterComponent,
    HeaderComponent,
    AttentionClientComponent,
    WhatsappButtonComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
