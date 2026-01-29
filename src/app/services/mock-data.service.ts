import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoomType } from '../models/RoomType';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  
  // Static Room Types Data
  private roomTypes: RoomType[] = [
    {
      id: 1,
      name: 'Single Room',
      pricePerNight: 99,
      imageUrl: 'assets/imgs/singleRoom.jpg'
    },
    {
      id: 2,
      name: 'Double Room',
      pricePerNight: 149,
      imageUrl: 'assets/imgs/StandardTwinRoom.jpg'
    },
    {
      id: 3,
      name: 'Deluxe Room',
      pricePerNight: 199,
      imageUrl: 'assets/imgs/DeluxeRoom.jpg'
    },
    {
      id: 4,
      name: 'Family Room',
      pricePerNight: 249,
      imageUrl: 'assets/imgs/FamilyRoom.jpg'
    },
    {
      id: 5,
      name: 'Sea View Suite',
      pricePerNight: 299,
      imageUrl: 'assets/imgs/SeaViewSuite.jpg'
    },
    {
      id: 6,
      name: 'Luxury Suite',
      pricePerNight: 399,
      imageUrl: 'assets/imgs/LuxurySuite.jpg'
    }
  ];

  getAllRoomTypes(): Observable<ApiResponse<RoomType[]>> {
    return of({
      data: this.roomTypes,
      isSuccess: true,
      errors: null
    });
  }

  getRoomTypeById(id: number): Observable<ApiResponse<RoomType | undefined>> {
    const room = this.roomTypes.find(r => r.id === id);
    return of({
      data: room,
      isSuccess: true,
      errors: null
    });
  }
}
