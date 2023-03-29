import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { RidePage } from './ride.page';

const routes: Routes = [
  {
    path: '',
    component: RidePage,
  },
  {
    path: 'ride',
    component: BookingComponent,
  },
  {
    // path: 'booked-ride',
    path: ':id',
    loadChildren: () => import('./booked-ride/booked-ride.module').then( m => m.BookedRidePageModule)
  },
  {
    path: 'shared-ride',
    loadChildren: () => import('./shared-ride/shared-ride.module').then( m => m.SharedRidePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidePageRoutingModule {}
