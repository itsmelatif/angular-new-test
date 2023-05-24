import { Injectable } from '@angular/core';
import { IMenu } from '../interfaces/menu-interface';
import { faDashboard, faListCheck, faUserDoctor, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: IMenu[] = [
    {
      headLabel: 'general',
      items: [
        {
          label: 'dashboard',
          icon: faDashboard,
          link: '/dashboard'
        }
      ]
    },
    {
      headLabel: 'administration',
      items: [
        {
          label: 'patient',
          icon: faUserFriends,
          link: '/patient'
        },
        {
          label: 'visit',
          icon: faUserDoctor,
          link: '/visit'
        },
        {
          label: 'medical-record',
          icon: faListCheck,
          link: '/medical-records'
        },
      ]
    }

  ]

  constructor() { }

  get listMenu(){
    return this.menu;
  }
}
