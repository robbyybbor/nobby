import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asincrone2PageRoutingModule } from './asincrone2-routing.module';

import { Asincrone2Page } from './asincrone2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asincrone2PageRoutingModule
  ],
  declarations: [Asincrone2Page]
})
export class Asincrone2PageModule {}
