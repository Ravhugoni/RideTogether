import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }
  // Add
  
  AddBooking(bookingDetails:any): Observable<any> {
    let API_URL = environment.REST_API + '/booking/addBooking';
    return this.httpClient.post(API_URL, bookingDetails).pipe();
  }
  
  UserLogin(loginDetails:any): Observable<any> {
    let API_URL = environment.REST_API + '/login';
    return this.httpClient.post(API_URL, loginDetails)
  }

  getFullBookingDetails(): Observable<any> {
    return this.httpClient.get(environment.REST_API + '/booking/GetFullBookingDetails').pipe();
  }
  
}