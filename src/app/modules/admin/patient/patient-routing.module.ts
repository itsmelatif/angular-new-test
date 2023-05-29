import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientPageComponent } from './components/patient-page/patient-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: PatientPageComponent, children: [
    { path: '', component: ListComponent },
    { path: 'form/add', component: FormComponent },
    { path: 'form/edit/:id', component: FormComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
