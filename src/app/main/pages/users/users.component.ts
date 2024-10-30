import { Component, computed, effect, inject, OnInit, runInInjectionContext, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users/users.service';
import { StatesService } from '../../../services/states.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import '@lottiefiles/dotlottie-wc';
import { LoadingComponent } from '../../components/loading/loading.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserCardComponent,
    LoadingComponent,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [UsersService]
})
export class UsersComponent {

  users = signal<User[]>([]);
  isLoading = signal<boolean>(true);

  constructor() {
    this.isLoading.set(true);
    effect(() => {
      this.getUsers(this.stateService.query());
    });
  }

  private userService = inject(UsersService);
  private stateService = inject(StatesService);

  getUsers(query?: string) {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
      },
      error: (err) => {
        console.warn(err);
      },
      complete: () => {
        setTimeout(() => {
          this.isLoading.set(false);
        }, 1000);
      }
    });
  }


  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {},
      error: (err) => {},
      complete: () => {
        this.isLoading.set(true);
        this.getUsers(this.stateService.query());
      }
    })
  }



}
