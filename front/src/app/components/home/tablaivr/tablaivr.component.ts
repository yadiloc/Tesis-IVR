
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/interface/ivr';


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-tablaivr',
  templateUrl: './tablaivr.component.html',
  styleUrls: ['./tablaivr.component.css']
})
export class TablaivrComponent {

  displayedColumns: string[] = ['Nombre ivr', 'Numero de Asociado', 'Fecha', 'Modificar', 'Eliminar'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = "Estudiantes por pagina";
    this.paginator._intl.firstPageLabel = "Primera pagina";
    this.paginator._intl.nextPageLabel = "Siguiente pagina";
    this.paginator._intl.lastPageLabel = "Ultima pagina";
    this.paginator._intl.previousPageLabel = "Pagina anterior";
    console.log(this.paginator);
  }
}
