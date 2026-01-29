import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.html',
  styleUrls: ['./signin.scss']
})
export class Signin implements OnInit {
  email: string = '';
  password: string = '';

  ngOnInit(): void {}

  onSignIn(): void {
    console.log({
      email: this.email,
      password: this.password
    });
  }

  onGoogleSignIn(): void {
    console.log('Google Sign In');
  }

  onFacebookSignIn(): void {
    console.log('Facebook Sign In');
  }
}
