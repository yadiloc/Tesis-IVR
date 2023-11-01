import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog} from '@angular/material/dialog';
import { AudioService } from 'src/app/services/audio.service';



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

}


