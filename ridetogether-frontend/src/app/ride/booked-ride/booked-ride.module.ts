import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookedRidePageRoutingModule } from './booked-ride-routing.module';

import { BookedRidePage } from './booked-ride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookedRidePageRoutingModule
  ],
  declarations: [BookedRidePage]
})
export class BookedRidePageModule {}
