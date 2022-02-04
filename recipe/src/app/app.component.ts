import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipe';
  navTo: string = 'recipe';
  goTo(e: string) {
    console.log(e);
    this.navTo = e;
  }
}
