import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  //   template: '<h2>John Doe</h2>',
  templateUrl: './user.component.html',
  styleUrls: ['user.component.css'],
})
export class UserComponent {
  // properties:
  user: User;

  // methods:
  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA',
      },
    };
  }
}
