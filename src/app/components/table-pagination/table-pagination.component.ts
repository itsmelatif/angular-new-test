import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentConstant } from '../constant/component-constant';

@Component({
  selector: 'app-table-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {
  @Input() page = 1
  perPage = ComponentConstant.listPagination;
  listPage: number[] = [1];

  constructor(){

  }

  ngOnInit(): void {
    this.listPage = Array(this.page).fill(0).map((x, i) => i+1);
  }
}
