import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-galry',
  imports: [CommonModule],
  templateUrl: './photos-galry.html',
  styleUrl: './photos-galry.scss'
})
export class PhotosGalry implements OnInit {
photos = [
    { url: 'assets/imgs/features.jpg', title: 'Deluxe Room', category: 'Rooms' },
    { url: 'assets/imgs/LuxurySuite.jpg', title: 'Sea View Suite', category: 'Rooms' },
    { url: 'assets/imgs/FamilyRoom.jpg', title: 'Outdoor Pool', category: 'Facilities' },
    { url: 'assets/imgs/SeaViewSuite.jpg', title: 'Fitness Center', category: 'Facilities' },
    { url: 'assets/imgs/Vision.jpg', title: 'Dining Area', category: 'Restaurant' },
    { url: 'assets/imgs/StandardTwinRoom.jpg', title: 'Chef’s Specials', category: 'Restaurant' },
    { url: 'assets/imgs/singleRoom.jpg', title: 'Wedding Ceremony', category: 'Events' },
    { url: 'assets/imgs/SeaViewSuite2.jpg', title: 'Corporate Meeting', category: 'Events' },
  ];

  categories = ['All', 'Rooms', 'Facilities', 'Restaurant', 'Events'];
  selectedCategory = 'All';
  filteredPhotos = this.photos;

  ngOnInit(): void {
    this.filterPhotos('All');
  }

  filterPhotos(category: string) {
    this.selectedCategory = category;
    this.filteredPhotos = category === 'All'
      ? this.photos
      : this.photos.filter(p => p.category === category);
  }

}
