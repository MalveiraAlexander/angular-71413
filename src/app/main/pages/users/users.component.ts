import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  users = signal<User[]>([
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe'
    },
    {
      id: 2,
      firstname: 'Jane',
      lastname: 'Doe'
    },
    {
      id: 3,
      firstname: 'Alice',
      lastname: 'Smith'
    },
    {
      id: 4,
      firstname: 'Bob',
      lastname: 'Smith'
    },
    {
      id: 5,
      firstname: 'Charlie',
      lastname: 'Brown'
    }
  ]);

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
    });
  }
}


