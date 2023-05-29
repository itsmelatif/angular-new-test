import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsService } from '../../services/components.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isHideSidebar = false;

  constructor(
    private componentService: ComponentsService
  ){

  }

  ngOnInit(): void {

  }

  loadSidebar(){
    this.componentService.hideSidebar$.subscribe(res => {
      this.isHideSidebar = res;
    }, error => (err: any) => {
      alert('system error');
    })
  }
}
