import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPokemnPage } from './lista-pokemn.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPokemnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPokemnPageRoutingModule {}
