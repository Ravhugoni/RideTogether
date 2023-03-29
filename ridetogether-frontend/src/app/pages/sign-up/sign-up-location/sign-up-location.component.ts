import { Component, OnInit } from '@angular/core';

declare const L:any;
@Component({
  selector: 'app-sign-up-location',
  templateUrl: './sign-up-location.component.html',
  styleUrls: ['./sign-up-location.component.scss'],
})
export class SignUpLocationComponent  implements OnInit {

  public isLocation: Boolean = false;
  lat:any;
  lng:any;

  constructor() { }

  ngOnInit() {}

  async useLocation()
  {
    this.isLocation= true;


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async(position) => {
      if (position) {
        console.log("Latitude: " + position.coords.latitude +
          "Longitude: " + position.coords.longitude);

        this.lat = await position.coords.latitude;
        this.lng = await position.coords.longitude;
        localStorage.setItem('latitude', this.lat)
        localStorage.setItem('longitude', this.lng)
      }

      let cood = String(this.lat)+ ','+ String(this.lng);
    
      var map = L.map('map').setView([this.lat,this.lng], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      L.marker([this.lat, this.lng]).addTo(map)
          .bindPopup(`I'm here`)
          .openPopup();
      })
    }
  }


}
