import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog} from '@angular/material/dialog';
import { DialogconfirmComponent } from '../dialogconfirm/dialogconfirm.component';
import { TablaivrComponent } from './tablaivr/tablaivr.component';



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
  constructor( private observer: BreakpointObserver, private cd: ChangeDetectorRef, public dialog: MatDialog,public dialogo: MatDialog) {
  
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
  @ViewChild(TablaivrComponent) hijo!:TablaivrComponent ;
  guardar() {
  
    const dialogRef = this.dialog.open(DialogconfirmComponent, {
  
      width: '500px',
    });
    dialogRef.componentInstance.tabla.subscribe(()=>{
      this.hijo.listarIvr();
      console.log("no lo hace")
      dialogRef.close()
    })
  
  }
 
}


