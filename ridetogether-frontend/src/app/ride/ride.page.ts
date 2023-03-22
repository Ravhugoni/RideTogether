import { Component } from '@angular/core';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-ride',
  templateUrl: 'ride.page.html',
  styleUrls: ['ride.page.scss']
})
export class RidePage {

  booking!:any;
  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.getFullBookingDetails();
  }

  getFullBookingDetails()
  {
    this.bookingService.getFullBookingDetails().subscribe((res) => {
      let result = res;
      this.booking = result.filter((res:any) => Number(res.bookerperson) === Number(sessionStorage.getItem('user')));
    });
  }
}
