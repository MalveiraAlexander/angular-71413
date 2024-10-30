import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  showText: boolean = true;

  names: string[] = ['Juan', 'Pedro', 'Luis', 'Ana', 'Maria'];

  changeShowText() {
    this.showText = !this.showText;
  }
}
