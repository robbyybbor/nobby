import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPokemnPageRoutingModule } from './lista-pokemn-routing.module';

import { ListaPokemnPage } from './lista-pokemn.page';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPokemnPageRoutingModule,
    ScrollingModule,
  ],
  declarations: [ListaPokemnPage]
})
export class ListaPokemnPageModule {}
