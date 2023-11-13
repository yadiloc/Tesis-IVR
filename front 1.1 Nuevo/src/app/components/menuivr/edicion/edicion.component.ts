import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TiempoesperaComponent } from '../tiempoespera/tiempoespera.component';
import { Audios } from 'src/app/models/audio';
import { AudioComponent } from '../audio/audio.component';
import { DialogbienvenidaComponent } from '../dialogbienvenida/dialogbienvenida.component';
import { DialogtextoComponent } from '../dialogtexto/dialogtexto.component';
import { TransferenciaComponent } from '../transferencia/transferencia.component';
import { MatDialog } from '@angular/material/dialog';
import { AudioService } from 'src/app/services/audio.service';
import { BienvenidaService } from 'src/app/services/bienvenida.service';
import { IvrAgregationService } from 'src/app/services/ivragregation.service';
import { TextoService } from 'src/app/services/texto.service';
import { TiempoEsperaService } from 'src/app/services/tiempoEspera.service';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Texto } from 'src/app/models/texto';
import { Bienvenida } from 'src/app/models/bienvenida';
import { Transferencia } from 'src/app/models/transferencia';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { TiempoEspera } from 'src/app/models/tiempoEspera';
import * as JssonToXml from 'js2xmlparser'


@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  mostrar: any[] = [];

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  hidden = false;
  textomensaje!: Texto;
  audiomensaje!: Audios;
  timemensaje!: TiempoEspera;
  numeroTransfer!: Transferencia;
  bienvenida!: Bienvenida;
  constructor(
    public dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private transferenciaService: TransferenciaService,
    private audioService: AudioService,
    private textoservice: TextoService,
    private tiempoEsperaService: TiempoEsperaService,
    private bienvenidaservice: BienvenidaService,
    private activatedRoute: ActivatedRoute,

  ) { }
  id!: number;
  idivr!: number;
  lisTexto!: Texto[];
  tiempoes!: any;
  bienvenidaelement !: Bienvenida[];
  audioss !: Audios[];
  transferencia!: Transferencia[];
  edicion: any[] = [];

  ngOnInit(): void {
    this.obtenerElementos()
  }



  cancelar(): void {
    window.location.reload()
  }

  bienvcontrol = "";

  mess: string = ""
  musica!: File
  Bienvenida(id: number) {
    const dialogRef = this.dialog.open(DialogbienvenidaComponent, {
      minHeight: '35vh',
      width: '500px',
      data: { id: id, mess: this.bienvenida, musica: this.bienvenida, idivr: this.idivr },
    });

    dialogRef.afterClosed().subscribe(result => {
      let data: Bienvenida = new Bienvenida(id, result.mess, result.musica, this.idivr)
      this.bienvenidaservice.update(data).subscribe(result => {
        this.mostrar.push(data)
        this.obtenerElementos()
      })

    });
  }

  audios!: Audios

  Audio(id: number) {
    const dialogRef = this.dialog.open(AudioComponent, {
      width: '500px',
      data: { audios: this.audiomensaje },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.mostrar.push(data)
      this.obtenerElementos()
    });
  }



  tiempo!: number
  idIvr!: number
  tiempoe(id: number) {
    const dialogRef = this.dialog.open(TiempoesperaComponent, {

      width: '500px',

      data: { id: id, idivr: this.idivr, tiempo: this.timemensaje },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, id, this.idIvr)
      if (result != undefined) {
        let data: TiempoEspera = new TiempoEspera(id, this.idivr, result.tiempo.toString())
        this.tiempoEsperaService.update(data).subscribe(result => {
          this.mostrar.push(data)
          this.obtenerElementos()

        })
      }
    });
  }

  numeroTelf!: string
  tiempoEspera!: number
  melodia!: File
  transferenciaLLamada(id: number) {
    const dialogRef = this.dialog.open(TransferenciaComponent, {
      width: '500px',
      data: { id: id, numeroTelf: this.numeroTransfer, tiempoEspera: this.numeroTransfer, melodia: this.numeroTransfer, idivr: this.idivr }
    });

    dialogRef.afterClosed().subscribe(result => {
      let data: Transferencia = new Transferencia(id, result.numeroTelf, result.tiempoEspera, result.melodia, this.idivr)
      console.log(data)
      this.transferenciaService.update(data).subscribe(result => {
        this.mostrar.push(data)
        this.obtenerElementos()
      })

    });
  }
  contenido!: string;

  Texto(id: number) {
    const dialogRef = this.dialog.open(DialogtextoComponent, {
      width: '500px',
      data: { id: id, idivr: this.idivr, contenido: this.textomensaje }
    });
    dialogRef.afterClosed().subscribe(result => {
      let data: Texto = new Texto(id, result.contenido, this.idivr)
      this.textoservice.update(data).subscribe(result => {
        this.mostrar.push(data)
        this.obtenerElementos()
      })

    });


  }



  obtenerElementos() {
    this.activatedRoute.paramMap.subscribe(params => {
      let idPa = params.get("id")
      if (idPa != null) {
        this.idivr = parseInt(idPa, 10)
      }
      this.textoservice.getTexto(this.idivr).subscribe(element => {
        this.lisTexto = element;
        this.mostrar.push(element)
      });
      this.tiempoEsperaService.getTiempo(this.idivr).subscribe(element => {
        this.tiempoes = element;
        this.edicion = element;
        this.mostrar.push(element)
      });
      this.bienvenidaservice.getBienvenida(this.idivr).subscribe(element => {
        this.bienvenidaelement = element;
        this.mostrar.push(element)
        this.edicion = element;
      });
      this.audioService.getAudio(this.idivr).subscribe(element => {
        this.audioss = element;
        this.edicion = element;
        this.mostrar.push(element)
      });

      this.transferenciaService.getTrans(this.idivr).subscribe(element => {
        this.transferencia = element;
        this.edicion = element;
        this.mostrar.push(element)
      });
    })

  }


  // Aqui se implementara las eliminaciones de cada uno de los elementos
  openDialog(tipo: string, id: number) {
    if (tipo === 'texto') {
      this.textoservice.delete(id).subscribe()
      this.obtenerElementos()
    }
    else if (tipo === 'ti') {
      this.tiempoEsperaService.delete(id).subscribe()
      this.obtenerElementos()

    }
    else if (tipo === 'bienveida') {
      this.bienvenidaservice.delete(id).subscribe()
      this.obtenerElementos()

    }
    else if (tipo === 'transferencia') {
      this.transferenciaService.delete(id).subscribe()
      this.obtenerElementos()
    }
    if (tipo === 'audios') {
      this.audioService.delete(id).subscribe()
      this.obtenerElementos()
    }
    this.obtenerElementos()
  }

  generarXml() {
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


