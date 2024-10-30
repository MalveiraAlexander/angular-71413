import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor() { }

  query = signal<string>('');

  search(event: any) {
    this.query.set(event.target.value);
  }

}
