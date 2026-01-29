import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  cartItems = [
    {
      id: 1,
      roomName: 'Deluxe Room',
      checkIn: '2026-02-15',
      checkOut: '2026-02-18',
      nights: 3,
      pricePerNight: 199,
      imageUrl: 'assets/imgs/DeluxeRoom.jpg'
    }
  ];

  get totalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.nights * item.pricePerNight), 0);
  }

  removeItem(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }
}
