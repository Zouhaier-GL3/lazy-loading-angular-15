import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReceptionComponent } from './reception/reception.component';
import { TotalReportsComponent } from './total-reports/total-reports.component';
import { MentionedVendorsComponent } from './mentioned-vendors/mentioned-vendors.component';
import { PositionsComponent } from './positions/positions.component';
import { ActivityComponent } from './activity/activity.component';



@NgModule({
  declarations: [
    ReceptionComponent,
    TotalReportsComponent,
    MentionedVendorsComponent,
    PositionsComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
