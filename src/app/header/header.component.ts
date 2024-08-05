import {Component, HostListener} from '@angular/core';
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

  toggleMenu(event: Event) {
    event.stopPropagation(); // Previene que el clic en el botón del menú cierre el menú inmediatamente
    this.menuOpen = !this.menuOpen;
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('active', this.menuOpen);
    }
  }

  closeMenu() {
    this.menuOpen = false;
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.remove('active');
    }
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const target = event.target as HTMLElement;

    if (this.menuOpen && navLinks && !navLinks.contains(target) && !menuIcon?.contains(target)) {
      this.closeMenu();
    }
  }
}
