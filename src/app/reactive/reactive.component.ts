import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorComponent } from '../components/validator.component';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ValidatorComponent
  ],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent implements OnInit {

  form = signal<FormGroup>(null!);

  ngOnInit(): void {
    this.createForm();
  }

  save() {
    console.log(this.form());
    console.log(this.form().value);

  }

  createForm() {
    this.form.set(new FormGroup({
      firstName: new FormControl<string>('', [Validators.required, Validators.minLength(2), Validators.maxLength(75)]),
      lastName: new FormControl<string>('', [Validators.required, Validators.minLength(2), Validators.maxLength(75)]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      birthDate: new FormControl<Date>(new Date(), [Validators.required]),
      password: new FormControl<string>('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      terms: new FormControl<boolean>(false, [Validators.requiredTrue])
    }));
  }


}
