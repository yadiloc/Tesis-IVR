import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogaudioComponent } from './dialogaudio/dialogaudio.component';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { DialogbienvenidaComponent } from './dialogbienvenida/dialogbienvenida.component';
import { DialogtextoComponent } from './dialogtexto/dialogtexto.component';
import { TiempoesperaComponent } from './tiempoespera/tiempoespera.component';
import { MenuinteractivoComponent } from './menuinteractivo/menuinteractivo.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { AudioComponent } from './audio/audio.component';


export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-menuivr',
  templateUrl: './menuivr.component.html',
  styleUrls: ['./menuivr.component.css']
})
export class MenuivrComponent implements AfterViewInit {
  menuTrigger: any;
  opcionvalue:string=""
open: any;
  constructor(public dialog: MatDialog, private observer: BreakpointObserver, private cd: ChangeDetectorRef) {

  }
  bienvcontrol = "";
  
 
opciones = [
    { name: 'Bienvenida'},
    { name: 'Audio'},
    { name: 'Texto'},
    { name: 'Tiempo espera' },
    { name: 'Menu interactivo' },
    { name: 'Transferenciallamada' },
    { name: 'Consultas BD' },
    

  ];
  llamarmodal(y:string) {
   
    if (y == "Bienvenida") {
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(DialogbienvenidaComponent, {
        restoreFocus: false
      })
      dialogRef.afterClosed().subscribe(() =>
        this.menuTrigger.focus())
    }
    else if (y == "Audio") {
      
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(AudioComponent, {
        restoreFocus: false
      })
      dialogRef.afterClosed().subscribe(() =>
        this.menuTrigger.focus())
    }
    else if (y == "Tiempo espera") {
      
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(TiempoesperaComponent, {
        restoreFocus: false
      })
      dialogRef.afterClosed().subscribe(() =>
        this.menuTrigger.focus())
    }
    else if (y == "Menu interactivo") {
      
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(MenuinteractivoComponent, {
        restoreFocus: false
      })
      dialogRef.afterClosed().subscribe(() =>
        this.menuTrigger.focus())
    }
    else if (y == "Transferenciallamada") {
      
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(TransferenciaComponent, {
        restoreFocus: false
      })
      dialogRef.afterClosed().subscribe(() =>
        this.menuTrigger.focus())
    }

    else  {
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(DialogtextoComponent, {
        restoreFocus: false
      })
      dialogRef.afterClosed().subscribe(() =>
        this.menuTrigger.focus())

    }
  }


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  hidden = false;

  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((resp: any) => {
    

      if (resp.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
       
  
    })
    this.cd.detectChanges();
  }

 audio(open: any ){
    open= this.dialog.open(DialogaudioComponent, {
    restoreFocus: false
  })
 }
 texto(open: any ){
  open= this.dialog.open(DialogtextoComponent, {
  restoreFocus: false
})
}


}

