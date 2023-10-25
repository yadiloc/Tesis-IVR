export interface IVRS {
  mensajesBienvenida: (bsb)[];
  audios: AudioMensaje[];
  textos: TextoMensaje[];
  tiemposEspera: TiempoEspera[];
  transferenciasLlamada: TransferenciaLlamada[];
}
export interface bsb{
  audiodata: string;
  texto: string;
}
 
export interface AudioMensaje {
  audiodata: string;
}

export interface TextoMensaje {
  texto: string;
}

export interface TiempoEspera {
  
  tiempoespera: number;
}

export interface TransferenciaLlamada {
  audiodata: string;
  numerocell: number;
  tiempoespera: number;
}