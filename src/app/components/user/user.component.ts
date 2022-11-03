import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  //   template: '<h2>John Doe</h2>',
  templateUrl: './user.component.html',
  styleUrls: ['user.component.css'],
})
export class UserComponent {
  // properties:
  firstName = 'John';
  lastName = 'Doe';
  age = 30;
  address = {
    street: '50 Main street',
    city: 'Boston',
    state: 'MA',
  };

  // methods:
  constructor() {
    // this.sayHello();
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }
}
