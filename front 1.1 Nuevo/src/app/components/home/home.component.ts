import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTableDataSource } from '@angular/material/table';
import { DialogtextoComponent } from '../menuivr/dialogtexto/dialogtexto.component';
import { ConfAudioComponent } from './conf-audio/conf-audio.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfMensajesComponent } from './conf-mensajes/conf-mensajes.component';
import { TablaivrComponent } from './tablaivr/tablaivr.component';
import { AudioService } from 'src/app/services/audio.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
 
})

export class HomeComponent  implements AfterViewInit {
  menuTrigger: any;
  audios: any;
  textos: any;
  texto: any;
  constructor( private observer: BreakpointObserver, private cd: ChangeDetectorRef, public dialog: MatDialog,public dialogo: MatDialog, private audioService: AudioService) {
  
  }

 audio = new Audio();

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  hidden = false;

  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((resp: any) => {
      console.log("sdfdfwef");
      console.log(resp.matches);

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


    
    
  abrirDialogo() {
    const dialogRef = this.dialog.open(ConfAudioComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((datos: any) => {
      if (datos && datos.audio) {
        this.audioService.enviarAudio(datos.nombre, datos.audio)
          .subscribe(
            (response: any) => {
              // Manejar la respuesta del backend
              console.log('Respuesta del backend:', response);
              // Realizar acciones adicionales según la respuesta
            },
           
          );
      }
    });
  }



    confMensaje() {

      const dialogRef = this.dialog.open(ConfMensajesComponent, {
        width: '500px',
    
      })
     
}
}


