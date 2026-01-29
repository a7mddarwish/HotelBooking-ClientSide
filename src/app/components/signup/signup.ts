import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})
export class Signup implements OnInit {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  agreeToTerms: boolean = false;

  ngOnInit(): void {}

  onSignUp(): void {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    
    console.log({
      fullName: this.fullName,
      email: this.email,
      // Note: Passwords intentionally not logged for security
      agreeToTerms: this.agreeToTerms
    });
  }

  onGoogleSignUp(): void {
    console.log('Google Sign Up');
  }

  onFacebookSignUp(): void {
    console.log('Facebook Sign Up');
  }
}
