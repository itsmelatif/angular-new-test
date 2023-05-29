import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientPageComponent } from './components/patient-page/patient-page.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    PatientPageComponent,
    ListComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    CardComponent,
    TableComponent,
    TranslateModule,
    FontAwesomeModule
  ]
})
export class PatientModule { }
