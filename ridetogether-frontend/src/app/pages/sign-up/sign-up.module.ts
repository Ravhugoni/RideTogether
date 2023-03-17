import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { SignUpRideComponent } from './sign-up-ride/sign-up-ride.component';
import { SignUpTrakingComponent } from './sign-up-traking/sign-up-traking.component';
import { SignUpPromComponent } from './sign-up-prom/sign-up-prom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule
  ],
  declarations: [SignUpPage, SignUpRideComponent, SignUpTrakingComponent, SignUpPromComponent]
})
export class SignUpPageModule {}
