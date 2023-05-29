import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { MainComponent } from 'src/app/components/layout/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AdminPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MainComponent,
    FontAwesomeModule
  ]
})
export class AdminModule { }
