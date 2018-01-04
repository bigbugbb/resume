import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isMenuOpened = false;

  downloadResume(event) {
    event.preventDefault();
  }

  showMenu(event) {
    this.isMenuOpened = !this.isMenuOpened;
    event.preventDefault();
  }
}
