import { Component } from '@angular/core';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatAnchor, MatButtonModule, MatIconButton} from "@angular/material/button";
import {RouterLink, RouterModule} from "@angular/router";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {CommonModule, NgClass} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      if (this.menuOpen) {
        navLinks.classList.add('active');
      } else {
        navLinks.classList.remove('active');
      }
    }
  }
}
