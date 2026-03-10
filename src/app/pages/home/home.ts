import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit{
  waNumber = "919890750747";

  constructor() { }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  // =========================
  // Quote Form Submit
  // =========================
  submitQuote(form: any) {

    const { name, phone, email, location, requirementType, message } = form.value;

    if (!name || !phone || !location || !requirementType) {
      alert("Please complete all necessary fields.");
      return;
    }

    const dt = new Date();

    let waMessage =
      `*Professional Lead Request* 🏭%0A` +
      `*Date*: ${dt.toLocaleDateString()}%0A%0A` +
      `*Client*: ${name}%0A` +
      `*Contact*: ${phone}%0A` +
      `*Address*: ${location}%0A` +
      `*Segment*: ${requirementType}%0A`;

    if (email) waMessage += `*Email*: ${email}%0A`;
    if (message) waMessage += `*Remarks*: ${message}%0A`;

    const waLink = `https://wa.me/${this.waNumber}?text=${waMessage}`;
    window.open(waLink, '_blank');

    form.reset();

    alert("Sent successfully! Our sales team will connect with you via WhatsApp soon.");
  }

  // =========================
  // Contact Form Submit
  // =========================
  submitContact(form: any) {

    const { name, phone, location, requirementType, message } = form.value;

    if (!name || !phone || !location) {
      alert("Please complete all necessary fields.");
      return;
    }

    const dt = new Date();

    let waMessage =
      `*Support / Inquiry Request* 📩%0A` +
      `*Date*: ${dt.toLocaleDateString()}%0A%0A` +
      `*Client Name*: ${name}%0A` +
      `*Mobile Number*: ${phone}%0A` +
      `*Location*: ${location}%0A` +
      `*Query Type*: ${requirementType}%0A`;

    if (message) waMessage += `*Details*: ${message}%0A`;

    const waLink = `https://wa.me/${this.waNumber}?text=${waMessage}`;
    window.open(waLink, '_blank');

    form.reset();

    alert("Query sent successfully! We will connect with you via WhatsApp soon.");
  }

  // =========================
  // Scroll Animations
  // =========================
  initScrollAnimations() {

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }

      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');

    elements.forEach(el => {
      scrollObserver.observe(el);
    });
  }

}
