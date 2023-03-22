import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }
  // Add
  
  AddUser(userDetails:any): Observable<any> {

    console.log(userDetails)
    let API_URL = environment.REST_API + '/register';
    return this.httpClient.post(API_URL, userDetails).pipe();
  }
  
  UserLogin(loginDetails:any): Observable<any> {
    let API_URL = environment.REST_API + '/login';
    return this.httpClient.post(API_URL, loginDetails)
  }

  getAvailableVehicles(dates: any): Observable<any> {

    let API_URL = environment.REST_API + '/cars/GetAvailableVehicles';
    return this.httpClient.post(API_URL, dates).pipe();
  }
  getAvailableVehicle(): Observable<any> {
    return this.httpClient.get(environment.REST_API + '/cars/GetAvailableVehicle').pipe();
  }

  getFullDetailsOfVehicle(): Observable<any> {
    return this.httpClient.get(environment.REST_API + '/cars/GetFullDetailsOfVehicle').pipe();
  }
  
}