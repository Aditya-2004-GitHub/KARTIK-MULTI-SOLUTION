import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate';

@Component({
  selector: 'app-contact',
  imports: [ScrollAnimateDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  phone = '919890750747';

  message = 'Hello, I am interested in solar installation. Please provide details.';

  whatsappLink = `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
}
