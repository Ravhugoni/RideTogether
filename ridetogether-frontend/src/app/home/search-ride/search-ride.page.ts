import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/service/cars.service';

@Component({
  selector: 'app-search-ride',
  templateUrl: './search-ride.page.html',
  styleUrls: ['./search-ride.page.scss'],
})
export class SearchRidePage implements OnInit {

  availableVehicle?: any = '';


  constructor(private carsService: CarsService) { }

  ngOnInit() {
  }


  searchVehicle()
  {
    let currentdate = new Date()

    let dats = {
      pickup_date: '2023-03-16 21:14:58.104093+02',
      dropoff_date: '2023-03-17 21:14:58.104093+02'
    }

    // this.carsService.getAvailableVehicles(dats).subscribe((res) => {
      this.carsService.getAvailableVehicle().subscribe((res) => {
      this.availableVehicle = res;
    });
  }
  

}
