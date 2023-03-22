import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookedRidePage } from './booked-ride.page';

const routes: Routes = [
  {
    path: '',
    component: BookedRidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookedRidePageRoutingModule {}
