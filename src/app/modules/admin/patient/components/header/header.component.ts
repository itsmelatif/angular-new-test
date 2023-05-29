import { Component } from '@angular/core';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  iconPlus = faPlus;
  iconSearch = faSearch;
}
