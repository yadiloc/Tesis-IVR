export interface IVRS {
  mensajesBienvenida: (AudioMensaje | TextoMensaje)[];
  audios: AudioMensaje[];
  textos: TextoMensaje[];
  tiemposEspera: TiempoEspera[];
  transferenciasLlamada: TransferenciaLlamada[];
}

export interface AudioMensaje {
  audio: string;
}

export interface TextoMensaje {
  texto: string;
}

export interface TiempoEspera {
  
  tiempo: number;
}

export interface TransferenciaLlamada {
  tiempo: number;
  numero: string;
  audio: string;
}