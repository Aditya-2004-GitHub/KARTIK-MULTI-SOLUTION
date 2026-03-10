import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimateDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
