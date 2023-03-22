import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BookingService } from 'src/app/service/booking.service';
import { CarsService } from 'src/app/service/cars.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  sub!:any;
  carID!:any;
  fullData!:any;

  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService,
    private bookingService: BookingService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      return this.carID = params['id'];
    });

    this.getFullDetailsOfCar(this.carID)

  }

  getFullDetailsOfCar(carID:any)
  {
    this.carsService.getFullDetailsOfVehicle().subscribe((res) => {
      let result = res;
      this.fullData = result.filter((res:any) => Number(res.carID) === Number(carID));
    });
  }

  booking(data:any){
    let currentdate = new Date()

    let bookingData ={
      userid: sessionStorage.getItem('user'),
      carid: data.carID,
      pickup_date: currentdate,
      dropoff_date: currentdate,
      bk_status: 'pending',
      seat_available: Number(data.seatNo) - 1
    }

    this.bookingService.AddBooking(bookingData).subscribe((res) => {
    
    },(err:any) => {

      // if(err.error.status ==201)
      // {
      //   let msg = 'Successfully book!';
      //   let clr = 'success';
      //   this.presentToast(msg, clr);
      //   this.router.navigate(['/tab/rides'])
      // }
      // else{
      //   let msg = 'Something went wrong!';
      //   let clr = 'danger';
      //   this.presentToast(msg, clr);
      // }
      
  });
    this.router.navigate(['/tab/rides'])

  }

  async presentToast(msg:any, clr:any)
  {
    const toast = await this.toastController.create({
      message:msg,
      duration: 2000,
      position: 'top',
      color:clr,
      buttons: [
        {
          icon:'home'
          
        }
      ]

    });

    await toast.present();
  }

}
