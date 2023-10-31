
export class Ivrs{
    id:number;
    nombre:string;
    numeroAsociado:string;
    fecha:Date;
    constructor(id:number, nombre:string, numeroAsociado:string, fecha:Date){
        this.id = id;
        this.nombre = nombre;
        this.numeroAsociado = numeroAsociado;
        this.fecha=fecha;
    }

}