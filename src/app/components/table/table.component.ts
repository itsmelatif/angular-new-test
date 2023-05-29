import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePaginationComponent } from '../table-pagination/table-pagination.component';
import { ComponentConstant } from '../constant/component-constant';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TablePaginationComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() page: number = 1;
  perPage = ComponentConstant.listPagination;

  constructor(){

  }

  ngOnInit(): void {
      console.log(this.page);
  }
}
