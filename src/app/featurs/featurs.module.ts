import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatursRoutingModule } from './featurs-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FeatursRoutingModule
  ]
})
export class FeatursModule { }
