import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ScrollAnimateDirective } from '../../shared/scroll-animate';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
