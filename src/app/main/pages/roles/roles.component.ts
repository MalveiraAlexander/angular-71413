import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  isRed = signal<boolean>(false);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      console.log(data);
      switch (data['type']) {
        case 'Admin':
          this.isRed.set(true);
          break;
        case 'Default':
          this.isRed.set(false);
          break;
      }
    });
  }
}
