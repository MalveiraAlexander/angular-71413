import { Component, inject, input } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {

  users = input.required<User[]>();

  router = inject(Router);

  goToUser(id: string) {
    this.router.navigate(['user', id]);
  }
}
