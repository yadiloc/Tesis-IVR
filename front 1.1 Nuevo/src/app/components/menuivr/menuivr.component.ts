import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { DialogbienvenidaComponent } from './dialogbienvenida/dialogbienvenida.component';
import { DialogtextoComponent } from './dialogtexto/dialogtexto.component';
import { TiempoesperaComponent } from './tiempoespera/tiempoespera.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { AudioComponent } from './audio/audio.component';
import { AudioMensaje, TextoMensaje } from 'src/app/interface/ivr';
import * as JssonToXml from 'js2xmlparser'
import { ActivatedRoute } from '@angular/router';
import { AudioService } from 'src/app/services/audio.service';
import { TextoService } from 'src/app/services/texto.service';
import { TiempoEsperaService } from 'src/app/services/tiempoEspera.service';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Texto } from 'src/app/models/texto';
import { ElimanarparamsComponent } from './elimanarparams/elimanarparams.component';
import { Audios } from 'src/app/models/audio';
import { TiempoEspera } from 'src/app/models/tiempoEspera';
import { Transferencia } from 'src/app/models/transferencia';
import { strings } from '@material/icon-button';
import { isEmpty } from 'rxjs/internal/operators/isEmpty';
import { BienvenidaService } from 'src/app/services/bienvenida.service';
import { Bienvenida } from 'src/app/models/bienvenida';



export interface Ivr {
  parseIn(tiempoespera: any): unknown;
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
  mostrar: any[] = [];


  menuTrigger: any;
  audiodata: string = "";
  texto!: Texto;
  mensajeb: AudioMensaje | TextoMensaje = {
    audiodata: '',
    texto: ''
  };;

  tiempoespera = 0;
  numerocell = null;
  opcionvalue: string = "";
  audio = new Audio();

  controlaudio: boolean = true;

  fileInput: ElementRef<HTMLInputElement> | undefined;

  selectedFile: File | undefined;
  open: any;


  textomensaje!: Texto;
  audiomensaje!: Audios;
  timemensaje!: TiempoEspera;
  numeroTransfer!: Transferencia;
  bienvenida!: Bienvenida;

  constructor(private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private transferenciaService: TransferenciaService,
    private audioService: AudioService,
    private textoservice: TextoService,
    private tiempoEsperaService: TiempoEsperaService,
    private bienvenidaservice: BienvenidaService

  ) {

  }
  bienvcontrol = "";

  mess: string = ""
  musica!: File
  Bienvenida() {
    const dialogRef = this.dialog.open(DialogbienvenidaComponent, {
      minHeight: '35vh',
      width: '500px',
      data: { mess: this.bienvenida, musica: this.bienvenida },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.mostrar.push(result)
      console.log(this.mostrar)

    });
  }

  audios!: Audios

  Audio() {
    const dialogRef = this.dialog.open(AudioComponent, {
      width: '500px',
      data: { audios: this.audiomensaje },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.mostrar.push(result)
      console.log(this.mostrar)
    });
  }
  tiempo!: number
  tiempoe() {
    const dialogRef = this.dialog.open(TiempoesperaComponent, {
      width: '500px',
      data: { tiempo: this.timemensaje },
    });
    console.log(this.tiempo)
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        //   this.emptyIVRS.tiemposEspera.push(result)
        this.mostrar.push(result)
        console.log(this.mostrar)

      }
    });
  }

  numeroTelf!: string
  tiempoEspera!: number
  melodia!: File
  transferenciaLLamada() {
    const dialogRef = this.dialog.open(TransferenciaComponent, {
      width: '500px',
      data: { melodia: this.numeroTransfer, numeroTelf: this.numeroTransfer, tiempoEspera: this.numeroTransfer },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != true) {
        console.log('aaaarrrrr', result)
        // this.emptyIVRS.transferenciasLlamada.push(result)
        this.mostrar.push(result)
        console.log(this.mostrar)
      }

    });
  }
  contenido: string = "";
  Texto() {

    const dialogRef = this.dialog.open(DialogtextoComponent, {
      width: '500px',
      data: { contenido: this.textomensaje }
    })
    dialogRef.afterClosed().subscribe(result => {
      // this.emptyIVRS.textos.push(result)
      this.mostrar.push(result)
    })
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
  // este mtodo es para eliminar de la vista
  openDialog(indice: number) {
    console.log(indice)
    const dialogRef = this.dialog.open(ElimanarparamsComponent);

    dialogRef.afterClosed().subscribe(confirmado => {
      if (confirmado) {
        this.confirmarEliminacion(indice);
        console.log(indice)
      }
    });
  }

  confirmarEliminacion(indice: number) {
    this.mostrar.splice(indice, 1);
  }


  cancelar(): void {
    window.location.reload()
  }



  // Este metdo es para guardar en bd
  id!: number;

  guardarBd() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.mostrar.forEach(element => {
        if (element.contenido !== undefined) {
          console.log(element.contenido)
          element.idivr = this.id;
          this.textoservice.enviarTexto(element).subscribe();
        }
        if (element.tiempo !== undefined) {
          console.log(element.tiempo)
          element.idivr = this.id;
          this.tiempoEsperaService.enviarTiempo(element).subscribe();

        }
        if (element.audios !== undefined) {
          element.idivr = this.id;
          console.log('o0o0o00o0o',element.audios)
          this.audioService.post(element.audios)
        }
        
        if (element.melodia !== undefined && element.numeroTelf !== undefined && element.tiempoEspera !== undefined) {
          element.idivr = this.id;
          this.transferenciaService.post(element).subscribe()
          console
        }
        if (element.musica !== undefined && element.mess === undefined) {
          element.idivr = this.id;
          this.bienvenidaservice.post(element).subscribe()


        }
        else if (element.musica === undefined && element.mess !== undefined) {
          element.idivr = this.id;
          this.bienvenidaservice.post(element).subscribe()


        }
      })
    });
  }

  // este metodo espara generar xml
  onUpload() {
    this.guardarBd();
    const xmlSelectedElements = JssonToXml.parse('elements', { element: this.mostrar });
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(xmlSelectedElements));
    element.setAttribute('download', 'ivr');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

  }



}


