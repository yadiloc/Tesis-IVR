export class  Transferencia{
    numeroTelf:string
    tiempoEspera: number
    melodia:File
    idIvr:number
    
    constructor(tiempoEspera:number, idIvr:number,  numeroTelf: string, melodia:File){
        this.numeroTelf=numeroTelf,
        this.tiempoEspera=tiempoEspera,
        this.melodia=melodia,
        this.idIvr=idIvr
       
     

    }
   
 
   }