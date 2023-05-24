import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAlignLeft, faAlignRight, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConstant } from 'src/app/translate/translate-constant';
import { ComponentsService } from '../../services/components.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  iconHeader = faAlignLeft;
  iconUser = faUser;
  iconGlobe = faGlobe;
  isHideSidebar = false;

  currentLang? = '';
  listLang = TranslateConstant.LIST_LANG;

  constructor(
    private translateService: TranslateService,
    private componentService: ComponentsService
  ){

  }

  ngOnInit(): void {
    this.currentLang = this.translateService.getBrowserLang();
    this.loadSidebar();
  }

  loadSidebar(){
    this.componentService.hideSidebar$.subscribe(res => {
      this.isHideSidebar = res;
      this.iconHeader = res ? faAlignLeft : faAlignRight;
    }, error => (err: any) => {
      alert('system error');
    })
  }

  changeLang(value: string){
    this.translateService.use(value);
    this.currentLang = value;
  }

  toggleSidebar(){
    this.componentService.hideSidebar$.next(!this.isHideSidebar);
  }
}
