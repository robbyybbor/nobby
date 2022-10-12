import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsincronePage } from './asincrone.page';

const routes: Routes = [
  {
    path: '',
    component: AsincronePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsincronePageRoutingModule {}
