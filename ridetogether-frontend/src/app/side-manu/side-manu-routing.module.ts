import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideManuPage } from './side-manu.page';

const routes: Routes = [
  {
    path: '',
    component: SideManuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideManuPageRoutingModule {}
