import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import flatpickr from 'flatpickr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Homeserv } from '../../services/homeserv';
import { RoomType } from '../../models/RoomType';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {

  slides = [
    {
      image: 'assets/images/hero1.jpg',
      title: 'BEST HOTEL IN THE CITY',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero voluptates.'
    },
    {
      image: 'assets/images/hero2.jpg',
      title: 'COMFORT & LUXURY',
      subtitle: 'Enjoy premium rooms and facilities for a memorable stay.'
    }
  ];
  latestPosts = [
    {
      title: 'Sample post title 1',
      description:
        'If you want to get some good contents from the people of your country then just contribute into the main community and you will be benefitted from that.',
      imageUrl: 'assets/images/post1.jpg'
    },
    {
      title: 'Sample post title 2',
      description:
        'If you want to get some good contents from the people of your country then just contribute into the main community and you will be benefitted from that.',
      imageUrl: 'assets/images/post2.jpg'
    },
    {
      title: 'Sample post title 3',
      description:
        'If you want to get some good contents from the people of your country then just contribute into the main community and you will be benefitted from that.',
      imageUrl: 'assets/images/post3.jpg'
    }
  ];


  roomTypes: RoomType[] = [];
  loading = true;

  // 📅 Booking form data
  checkInDate: string = '';
  checkOutDate: string = '';
  adults: number = 1;
  children: number = 0;
  roomType: string = '';

  // 🌟 Features
  features = [
    { icon: 'bi-clock', title: '24 Hour Room Service', desc: 'Enjoy comfort and convenience anytime during your stay.' },
    { icon: 'bi-wifi', title: 'Free High-Speed Wifi', desc: 'Stay connected with our reliable high-speed internet.' },
    { icon: 'bi-sun', title: 'Enjoy Free Nights', desc: 'Special offers that make your vacation longer and better.' },
    { icon: 'bi-water', title: 'Swimming Pool', desc: 'Relax and refresh yourself in our luxury pool.' }
  ];

  @ViewChild('dateRangeInput', { static: true }) dateRangeInput!: ElementRef;

  constructor(private readonly homeServ: Homeserv, private readonly cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    flatpickr(this.dateRangeInput.nativeElement, {
      mode: 'range',
      dateFormat: 'Y-m-d',
      minDate: 'today',
      onChange: (selectedDates) => {
        if (selectedDates.length === 2) {
          this.checkInDate = selectedDates[0].toISOString().split('T')[0];
          this.checkOutDate = selectedDates[1].toISOString().split('T')[0];
        }
      }
    });

    this.homeServ.getAllRoomTypesBasicInfo().subscribe({
      next: (res) => {
        if (res.isSuccess) {
          this.roomTypes = res.data;
          console.log('Fetched room types:', this.roomTypes);
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching rooms', err);
        this.loading = false;
      }
    });
  }

  onBookNow(): void {
    console.log({
      roomType: this.roomType,
      checkIn: this.checkInDate,
      checkOut: this.checkOutDate,
      adults: this.adults,
      children: this.children
    });
  }

}
