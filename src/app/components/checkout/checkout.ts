import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class Checkout {
  fullName = '';
  email = '';
  phone = '';
  cardNumber = '';
  expiryDate = '';
  cvv = '';

  onSubmit(): void {
    alert('Booking confirmed! Thank you for choosing our hotel.');
  }
}
