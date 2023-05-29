import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsService } from '../../services/components.service';
import { BreadcrumbComponent } from '../../breadcrumb/breadcrumb.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, FontAwesomeModule, BreadcrumbComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isHideSidebar = false;

  constructor(
    private componentService: ComponentsService
  ){

  }

  ngOnInit(): void {
      this.loadSidebar();
  }

  loadSidebar(){
    this.componentService.hideSidebar$.subscribe(res => {
      this.isHideSidebar = res;
    }, error => (err: any) => {
      alert('system error');
    })
  }

}
