import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcela-parral';
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
