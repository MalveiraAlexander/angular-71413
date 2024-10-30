import { Component, inject, OnInit, signal } from '@angular/core';
import { StatesService } from '../../../services/states.service';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  providers: [UsersService]
})
export class UserComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private userService = inject(UsersService);

  isLoading = signal<boolean>(true);
  user = signal<User | null>(null);

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      if (data.has('id')) {
        this.getUser(data.get('id')!);
      }
    })
  }

  getUser(id: string) {
    this.isLoading.set(true);
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.user.set(data);
      },
      error: (err) => {},
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }
}
