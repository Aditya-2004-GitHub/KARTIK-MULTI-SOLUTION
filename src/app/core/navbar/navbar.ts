import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ScrollAnimateDirective } from '../../shared/scroll-animate';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ScrollAnimateDirective],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  closeMenu() {
    const navbar = document.getElementById('navbarNavCorp');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}
