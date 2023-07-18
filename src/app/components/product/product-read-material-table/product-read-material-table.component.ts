import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductReadMaterialTableDataSource, ProductReadMaterialTableItem } from './product-read-material-table-datasource';

@Component({
  selector: 'app-product-read-material-table',
  templateUrl: './product-read-material-table.component.html',
  styleUrls: ['./product-read-material-table.component.css']
})
export class ProductReadMaterialTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductReadMaterialTableItem>;
  dataSource = new ProductReadMaterialTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
