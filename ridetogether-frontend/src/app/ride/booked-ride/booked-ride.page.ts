import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/service/booking.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-booked-ride',
  templateUrl: './booked-ride.page.html',
  styleUrls: ['./booked-ride.page.scss'],
})
export class BookedRidePage implements OnInit {

  sub!:any;
  bookingID!:any;
  booking!:any;
  co_passengerID!:any
  driverID!:any;
  driver!:any;
  co_passengers:any[] = [];
  users?:any;

  constructor(private activatedRoute: ActivatedRoute, private bookingService: BookingService, private userService: UsersService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      return this.bookingID = params['id'];
    });
    this.getFullBookingDetails();
    this.getDriverDetails(); 
    this.getCoPassengers();
  }

  async getFullBookingDetails()
  {
    this.bookingService.getFullBookingDetails().subscribe(async (res) => {
      let result = res;
      let result2 = result.filter((res:any) => Number(res.bookerperson) === Number(sessionStorage.getItem('user')));
      this.booking = result2.filter((res:any) => Number(res.bookingID) === Number(this.bookingID));

      this.co_passengerID = await this.booking[0].co_passenger;
      this.driverID = await this.booking[0].driver
    });
  }

  getDriverDetails()
  {
    this.userService.getUsers().subscribe((res) => {
      let result = res;
      this.driver = result.filter((res:any) => Number(res.userID) === Number(this.driverID));
    });
  }
  getCoPassengers()
  {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;

      for(let i = 0; i < this.co_passengerID?.length; i++)
      {
        let data= this.users.filter((res:any) => Number(res.userID) === Number(this.co_passengerID[i]));

        this.co_passengers.push(data[0])
      }
    });
  }
}
