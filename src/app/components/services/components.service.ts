import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  hideSidebar$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
