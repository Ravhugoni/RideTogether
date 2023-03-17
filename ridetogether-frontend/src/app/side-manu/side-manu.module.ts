import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideManuPageRoutingModule } from './side-manu-routing.module';

import { SideManuPage } from './side-manu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideManuPageRoutingModule
  ],
  declarations: [SideManuPage]
})
export class SideManuPageModule {}
