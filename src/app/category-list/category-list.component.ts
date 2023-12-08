import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface CategoryElement {
  category: string;
  items: number;
}

const CATEGORY_ELEMENTS: CategoryElement[] = [
  {category: 'CategoryName', items: 10},
  {category: 'CategoryName', items: 10},
  {category: 'CategoryName', items: 10},
  {category: 'CategoryName', items: 10},
  {category: 'CategoryName', items: 10},
  {category: 'CategoryName', items: 10},
  {category: 'CategoryName', items: 10},
  {category: 'CategoryName', items: 10},
  {category: 'CategoryName', items: 10},
  {category: 'CategoryName', items: 10},
];

@Component({
  standalone: true,
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})
export class CategoryListComponent {
  displayedColumns: string[] = ['category', 'items'];
  dataSource = new MatTableDataSource(CATEGORY_ELEMENTS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
