import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpLocationComponent } from './sign-up-location/sign-up-location.component';
import { SignUpPromComponent } from './sign-up-prom/sign-up-prom.component';
import { SignUpRideComponent } from './sign-up-ride/sign-up-ride.component';
import { SignUpTrakingComponent } from './sign-up-traking/sign-up-traking.component';

import { SignUpPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage,
    children: [
      {
        path: 'ride',
        component:SignUpRideComponent
      },
      {
        path: 'prom',
        component: SignUpPromComponent
      },
      {
        path: 'traking',
        component: SignUpTrakingComponent
      },
      {
        path: 'location',
        component: SignUpLocationComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
