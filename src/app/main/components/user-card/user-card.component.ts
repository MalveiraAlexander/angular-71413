import { Component, input, output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  id = input.required<string>();
  name = input<string>();
  showDetails = input<boolean>(true);
  showDelete = input<boolean>(true);
  showEdit = input<boolean>(true);

  onDelete = output<string>();
  onEdit = output<string>();
  onView = output<string>();

}
