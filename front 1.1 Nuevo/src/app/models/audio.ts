export class Audios{
    audios : File ;
    idivr: number;
    id:number;
  
constructor( audios : File, idivr:number, id:number){
    this.audios=audios;
    this.idivr=idivr;
    this.id=id;
}
}