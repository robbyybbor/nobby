import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchInArrayPageRoutingModule } from './search-in-array-routing.module';

import { SearchInArrayPage } from './search-in-array.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchInArrayPageRoutingModule
  ],
  declarations: [SearchInArrayPage]
})
export class SearchInArrayPageModule {}
