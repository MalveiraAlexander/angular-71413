import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  showText = signal<boolean>(true);
  names = signal<string[]>(['Juan', 'Pedro', 'Luis', 'Ana', 'Maria']);

  changeShowText() {
    this.showText.set(!this.showText());
  }
}
