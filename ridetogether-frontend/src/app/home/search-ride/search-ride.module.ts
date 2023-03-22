import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRidePageRoutingModule } from './search-ride-routing.module';

import { SearchRidePage } from './search-ride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchRidePageRoutingModule
  ],
  declarations: [SearchRidePage]
})
export class SearchRidePageModule {}
