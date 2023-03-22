import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { SignUpPage } from './sign-up.page';
import { SignUpRideComponent } from './sign-up-ride/sign-up-ride.component';
import { SignUpTrakingComponent } from './sign-up-traking/sign-up-traking.component';
import { SignUpPromComponent } from './sign-up-prom/sign-up-prom.component';
import { SignUpLocationComponent } from './sign-up-location/sign-up-location.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    SignUpPageRoutingModule
  ],
  declarations: [SignUpPage, SignUpRideComponent, SignUpTrakingComponent, SignUpPromComponent, SignUpLocationComponent, SignUpComponent]
})
export class SignUpPageModule {}
