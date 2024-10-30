import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ValidatorComponent } from '../../components/validator/validator.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user.model';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-user-add-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ValidatorComponent,
    RouterLink,
    LoadingComponent
  ],
  templateUrl: './user-add-edit.component.html',
  styleUrl: './user-add-edit.component.scss',
  providers: [UsersService]
})
export class UserAddEditComponent implements OnInit {


  private activatedRoute = inject(ActivatedRoute);
  private userService = inject(UsersService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  miFormulario = signal(this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    gender: [''],
  }));

  isLoading = signal<boolean>(true);
  userId = signal<string | null>(null);

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      if (data.has('id')) {
        this.userId.set(data.get('id'));
        this.getUser(this.userId()!);
      }
    })
  }

  getUser(id: string) {
    this.isLoading.set(true);
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.miFormulario().patchValue(data);
      },
      error: (err) => {},
      complete: () => {
        setTimeout(() => {
          this.isLoading.set(false);
        }, 1000);
      }
    });
  }

  enviar() {
    if (this.miFormulario().valid) {
      if (this.userId() == null) {
        this.userService.addUser(this.miFormulario().value as User).subscribe({
          next: (data) => {},
          error: (err) => {},
          complete: () => {
            this.router.navigateByUrl('/main/users');
          }
        });
      } else {
        this.userService.editUser(this.miFormulario().value as User, this.userId()!).subscribe({
          next: (data) => {},
          error: (err) => {},
          complete: () => {
            this.router.navigateByUrl('/main/users');
          }
        });
      }

    } else {
      console.log('formulario invalido');
    }
  }
}
