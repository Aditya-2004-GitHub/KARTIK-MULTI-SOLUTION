import { Component, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from "./core/navbar/navbar";
import { Footer } from "./core/footer/footer";
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('KARTIK-MULTI-SOLUTIONS');

  hideLayout = false;

  constructor(private router: Router, private route: ActivatedRoute) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        let currentRoute = this.route.firstChild;
        while (currentRoute?.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        this.hideLayout = currentRoute?.snapshot.data['hideLayout'] || false;

      });

  }
}
