import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from 'src/app/services/menu.service';
import { IMenu } from 'src/app/interfaces/menu-interface';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsService } from '../../services/components.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, TranslateModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  listMenu: IMenu[] = [];
  isHide = false;

  constructor(
    private menuService: MenuService,
    private componentService: ComponentsService
  ){

  }

  ngOnInit(): void {
    this.listMenu = this.menuService.listMenu;
    this.loadToggleSidebar();
  }

  loadToggleSidebar(){
    this.componentService.hideSidebar$.subscribe(res => {
      this.isHide = res
    });
  }

}
