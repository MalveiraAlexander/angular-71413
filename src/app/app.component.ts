import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Clase2';

  constructor() {
    let token = localStorage.getItem('clase2-token');
    if (!token) {
      localStorage.setItem('clase2-token', 'algo');
    }
  }
}
