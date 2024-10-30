import { Component, signal } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { ValidatorComponent } from '../components/validator.component';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    ValidatorComponent,
    FormsModule
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

  userForm = signal<User>({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: new Date(),
    password: '',
    terms: false
  });

  save(form: FormGroup) {
    console.log(form);
    console.log(form.value);
  }
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  password: string;
  terms: boolean;
}
