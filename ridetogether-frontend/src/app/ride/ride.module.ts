import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RidePage } from './ride.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RidePageRoutingModule } from './ride-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RidePageRoutingModule
  ],
  declarations: [RidePage]
})
export class RidePageModule {}
