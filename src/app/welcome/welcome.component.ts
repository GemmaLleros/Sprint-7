import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  showHome = false;
  showHeadingAndButton = true;

  constructor(private router: Router){ }

  navigateToHome() {
    this.router.navigate(['./home']);
    this.showHome = true;
    this.showHeadingAndButton = false; // establece la propiedad en false
  }

  navigateToWelcome() {
    this.router.navigate(['./welcome']);
    this.showHome = false;
    this.showHeadingAndButton = true; // establece la propiedad en true
  }
}

