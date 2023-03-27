import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '**** **** STACK';

  handleRed(element: HTMLElement) {
    element.style.backgroundColor = 'rgba(255, 0, 63, 100%)';
  }
  handleBlue(element: HTMLElement) {
    element.style.backgroundColor = 'rgba(63, 0, 255, 100%)';
  }
};
