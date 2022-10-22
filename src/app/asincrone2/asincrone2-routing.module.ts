import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asincrone2Page } from './asincrone2.page';

const routes: Routes = [
  {
    path: '',
    component: Asincrone2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asincrone2PageRoutingModule {}
