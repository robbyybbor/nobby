import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsincronePageRoutingModule } from './asincrone-routing.module';

import { AsincronePage } from './asincrone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsincronePageRoutingModule
  ],
  declarations: [AsincronePage]
})
export class AsincronePageModule {}
