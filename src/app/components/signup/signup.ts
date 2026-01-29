import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    console.log({
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
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
