import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-details.html',
  styleUrls: ['./room-details.scss']
})
export class RoomDetails implements OnInit {
  checkInDate: string = '';
  checkOutDate: string = '';
  guests: number = 2;
  
  roomDetails = {
    name: 'Deluxe Suite',
    pricePerNight: 350,
    rating: 4.9,
    totalReviews: 256,
    size: '45 m²',
    bedType: 'King Size Bed',
    capacity: '2-3 Guests',
    view: 'City View',
    description: 'Experience luxury and comfort in our spacious Deluxe Suite. This elegantly designed room features modern amenities, stunning city views, and premium furnishings to ensure a memorable stay.',
    amenities: [
      'Free Wi-Fi',
      'Air Conditioning',
      'Mini Bar',
      'Smart TV',
      'Room Service',
      'Safe Box',
      'Coffee Maker',
      'Balcony'
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
      payment: 'All major credit cards accepted'
    },
    ratingBreakdown: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 }
    ],
    reviews: [
      {
        name: 'Sarah Johnson',
        avatar: 'SJ',
        rating: 5,
        date: 'January 15, 2026',
        comment: 'Amazing room with spectacular views! The staff was incredibly helpful and the amenities exceeded our expectations.'
      },
      {
        name: 'Michael Chen',
        avatar: 'MC',
        rating: 5,
        date: 'January 10, 2026',
        comment: 'Absolutely loved our stay. The room was spotless, modern, and very comfortable. Will definitely come back!'
      },
      {
        name: 'Emma Williams',
        avatar: 'EW',
        rating: 4,
        date: 'January 5, 2026',
        comment: 'Great location and beautiful room. Only minor issue was the noise from the street, but otherwise perfect.'
      }
    ]
  };

  ngOnInit(): void {}

  onBookNow(): void {
    console.log({
      checkIn: this.checkInDate,
      checkOut: this.checkOutDate,
      guests: this.guests
    });
  }
}
