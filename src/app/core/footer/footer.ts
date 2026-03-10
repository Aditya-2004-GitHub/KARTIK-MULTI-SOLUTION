import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { ScrollAnimateDirective } from '../../shared/scroll-animate';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, RouterModule, ScrollAnimateDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  phone = '919890750747';

  message = 'Hello, I am interested in solar installation. Please provide details.';

  whatsappLink = `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
}
