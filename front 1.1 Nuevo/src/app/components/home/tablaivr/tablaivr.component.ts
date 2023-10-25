
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ivr } from '../../menuivr/menuivr.component';
import { IvrService } from 'src/app/services/ivr.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ElimDiagComponent } from './elim-diag/elim-diag.component';
import { ModfDiagComponent } from './modf-diag/modf-diag.component';
import { Ivrs } from 'src/app/models/ivr.model';





@Component({
  selector: 'app-tablaivr',
  templateUrl: './tablaivr.component.html',
  styleUrls: ['./tablaivr.component.css']
})
export class TablaivrComponent implements OnInit {

  lisIvr: Ivrs[] = [];
  displayedColumns: string[] = ['id','nombre', 'numeroAsociado', 'Modificar', 'Eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: Ivrs[] = [];

  ngOnInit(): void {
    this.listarIvr();
  }

  constructor(public ivrService: IvrService, public dialog: MatDialog){

  }

  async listarIvr(){
    let ivr: Ivrs;
    let aux:Ivrs[] = [];
   this.ivrService.getList().subscribe( element => {
    aux = element;
    console.log(aux);
    aux.forEach(element => {
      ivr = new Ivrs(element.id, element.nombre, element.numeroAsociado);
      this.lisIvr.push(ivr);
    });
   });
   this.dataSource = this.lisIvr;

  }

 openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ElimDiagComponent, {
     width: '250px',
     enterAnimationDuration,
      exitAnimationDuration,
   });
 }

  modificarIvr() {
    const dialogRef = this.dialog.open(ModfDiagComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
 }

}