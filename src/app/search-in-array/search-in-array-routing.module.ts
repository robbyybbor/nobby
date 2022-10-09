import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchInArrayPage } from './search-in-array.page';

const routes: Routes = [
  {
    path: '',
    component: SearchInArrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchInArrayPageRoutingModule {}
