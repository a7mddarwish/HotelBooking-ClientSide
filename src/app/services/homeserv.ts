import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ApiResponse } from '../models/ApiResponse';
import { RoomType } from '../models/RoomType';

@Injectable({
  providedIn: 'root'
})
export class Homeserv {

  constructor(private readonly http: HttpClient) {}

  getAllRoomTypesBasicInfo(): Observable<ApiResponse<RoomType[]>> {
    const url = `${environment.homeapi}/RoomType/GetAllRoomTypesBasicInfo`;
    return this.http.get<ApiResponse<RoomType[]>>(url);
  }
}
