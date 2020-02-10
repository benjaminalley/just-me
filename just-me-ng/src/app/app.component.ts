import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'just-me-ng';

  openGitHub() {
    let win = window.open('https://github.com/benjaminalley', '_blank');
  win.focus();
  }
}
