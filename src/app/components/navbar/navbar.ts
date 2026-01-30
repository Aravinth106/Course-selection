import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
// Temporary state - later this will come from an AuthService
  isLoggedIn: boolean = false;

  toggleAuth() {
    this.isLoggedIn = !this.isLoggedIn;
    // You can add navigation logic here later
  }
}
