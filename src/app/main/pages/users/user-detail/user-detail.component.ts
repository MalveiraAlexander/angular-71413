import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  userId = signal<number>(0);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId.set(params['id']);
    });
  }
}
