import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasbhoardRoutingModule } from './dasbhoard-routing.module';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    DasbhoardRoutingModule
  ]
})
export class DasbhoardModule { }
