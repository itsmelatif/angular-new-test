import { Component } from '@angular/core';
import { IColumnPatient } from 'src/app/interfaces/patient-interface';

@Component({
  selector: 'app-patient-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  columns: Array<IColumnPatient> = ['no', 'patient_id', 'full_name', 'age', 'phone_number', 'email', 'subdistrict', 'city'];

  constructor(){

  }

}
