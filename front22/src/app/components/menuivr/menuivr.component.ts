import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { DialogbienvenidaComponent } from './dialogbienvenida/dialogbienvenida.component';
import { DialogtextoComponent } from './dialogtexto/dialogtexto.component';
import { TiempoesperaComponent } from './tiempoespera/tiempoespera.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { AudioComponent } from './audio/audio.component';
import { FormBuilder } from '@angular/forms';
import { AudioMensaje, IVRS, TextoMensaje, TiempoEspera, TransferenciaLlamada } from 'src/app/interface/ivr';

//@author Yadina
export interface Ivr {
  bienvenida: {};
  audio: {}
  texto: {}
  tiempoespera: {}
  tranferenciallamda: {}
}



@Component({
  selector: 'app-menuivr',
  templateUrl: './menuivr.component.html',
  styleUrls: ['./menuivr.component.css']
})
export class MenuivrComponent implements AfterViewInit {
  emptyIVRS: IVRS = {
    mensajesBienvenida: [],
    audios: [],
    textos: [],
    tiemposEspera: [],
    transferenciasLlamada: []
  };
  menuTrigger: any;
  audiodata: string = "";
  mensajeBienvenida: AudioMensaje | TextoMensaje = {
    audio: '',
    texto: ''
  }
    ;
  tiempoespera = 0;
  numerocell = 0;
  opcionvalue: string = "";
  audio = new Audio();
  controlaudio: boolean = true;
  fileInput: ElementRef<HTMLInputElement> | undefined;

  selectedFile: File | undefined;
  open: any;
  constructor(public dialog: MatDialog, private observer: BreakpointObserver, private cd: ChangeDetectorRef, private _formBuilder: FormBuilder) {

  }
  bienvcontrol = "";


  //opciones = [
  //    { name: 'Bienvenida'},
  //   { name: 'Audio'},
  //   { name: 'Texto'},
  //   { name: 'Tiempo espera' },
  //   { name: 'Transferenciallamada' },
  //   { name: 'Consultas BD' },
  // ];
  // llamarmodal(y:string) {

  //   if (y == "Bienvenida") {
  //    const dialogRef = this.dialog.open(DialogbienvenidaComponent, 
  //     {
  //       width: '500px',
  //    data: {mensajeBienvenida:this.mensajeBienvenida},
  //  });

  //  dialogRef.afterClosed().subscribe(result => {
  //   console.log(result); 
  //  this.emptyIVRS.mensajesBienvenida.push(result)
  //  });
  // }
  // else if (y == "Audio") {

  //  const dialogRef = this.dialog.open(AudioComponent, {
  //  
  // width: '500px',
  //       data: {audiodata:this.audiodata},
  //    });

  //   dialogRef.afterClosed().subscribe(result => {
  //    console.log(result);
  //   this.emptyIVRS.audios.push(result)
  //  });
  // }
  // else if (y == "Tiempo espera") {

  // const dialogRef = this.dialog.open(TiempoesperaComponent, {
  //   width: '500px',
  //   data: {tiempoespera:this.tiempoespera},
  //  });

  // dialogRef.afterClosed().subscribe(result => {
  //  console.log(result);
  // this.emptyIVRS.tiemposEspera.push(result)
  // console.log(this.emptyIVRS)
  //});
  //}

  //  else if (y == "Transferenciallamada") {
  //  const dialogRef = this.dialog.open(TransferenciaComponent, {
  //    width: '500px',
  //   data: {audiodata:this.audiodata,numerocell:this.numerocell,tiempoespera:this.tiempoespera},
  // });

  // dialogRef.afterClosed().subscribe(result => {
  //  console.log(result);
  // this.emptyIVRS.transferenciasLlamada.push(result)
  //
  // });
  // }

  //else  {
  //    const dialogConfig = new MatDialogConfig();
  // const dialogRef = this.dialog.open(DialogtextoComponent, {
  //   width: '500px',
  // data:{tiempoespera:this.tiempoespera}
  //  })
  //  dialogRef.afterClosed().subscribe(() =>
  //  this.menuTrigger.focus())
  //
  // }
  // }

  

  Bienvenida(open: any) {
    open = this.dialog.open(DialogbienvenidaComponent,
      {
        width: '500px',
        data: { mensajeBienvenida: this.mensajeBienvenida },
      });
    open.afterClosed().subscribe((result: AudioMensaje | TextoMensaje) => {
      console.log(result);
      this.emptyIVRS.mensajesBienvenida.push(result)
    });

  }

  Audio(open: any) {

    open = this.dialog.open(AudioComponent, {
      width: '500px',

      data: { audiodata: this.audiodata },
    });
    open.afterClosed().subscribe((result: AudioMensaje) => {
      console.log(result);
      this.emptyIVRS.audios.push(result)
    });

  }
  tiempoEspera(open: any) {
    open = this.dialog.open(TiempoesperaComponent, {
      width: '500px',
      data: { tiempoespera: this.tiempoespera },
    });

    open.afterClosed().subscribe((result: TiempoEspera) => {
      console.log(result);
      this.emptyIVRS.tiemposEspera.push(result)
      console.log(this.emptyIVRS)
    });
  }

  transferenciaLlamada(open: any) {
    open = this.dialog.open(TransferenciaComponent, {
      width: '500px',
      data: { audioData: this.audiodata, numerocell: this.numerocell, tiempoespera: this.tiempoespera },
    });

    open.afterClosed().subscribe((result: TransferenciaLlamada) => {
      console.log(result);
      this.emptyIVRS.transferenciasLlamada.push(result)

    });
  }
  texto(open: any) {
    open = this.dialog.open(DialogtextoComponent, {
      width: '500px',
      data: { textos: this.texto },
    });

    open.afterClosed().subscribe((result: TextoMensaje) => {
      console.log(result);
      this.emptyIVRS.textos.push(result)

    });
  }

  onFileSelected(event: Event) {
    console.log(this.controlaudio)
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
    }
  }

  playAudio() {
    this.controlaudio = !this.controlaudio;
    console.log(this.controlaudio)
    if (this.selectedFile) {

      this.audio = new Audio();
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.audio.src = e.target.result;
        this.audio.load();
        this.audio.play();
        this.audio.onended = () => {
          this.audio = undefined!;
        };
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  stopAudio() {
    this.controlaudio = !this.controlaudio;
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = undefined!;
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
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }


    })
    this.cd.detectChanges();
  }


}
