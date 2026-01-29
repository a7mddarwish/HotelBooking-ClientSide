import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Account created successfully! Welcome ${this.fullName}`);
  }
}
