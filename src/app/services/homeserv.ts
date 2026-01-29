import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';
import { RoomType } from '../models/RoomType';
import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class Homeserv {

  constructor(private readonly mockData: MockDataService) {}

  getAllRoomTypesBasicInfo(): Observable<ApiResponse<RoomType[]>> {
    return this.mockData.getAllRoomTypes();
  }
}
