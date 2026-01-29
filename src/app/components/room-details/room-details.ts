import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoomType } from '../../models/RoomType';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-details.html',
  styleUrl: './room-details.scss'
})
export class RoomDetails implements OnInit {
  room?: RoomType;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mockData: MockDataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mockData.getRoomTypeById(id).subscribe({
      next: (res) => {
        if (res.isSuccess && res.data) {
          this.room = res.data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate(['/home']);
      }
    });
  }

  onBookNow(): void {
    alert('Booking functionality coming soon!');
  }
}
