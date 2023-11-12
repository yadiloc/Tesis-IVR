import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TiempoEspera } from "../models/tiempoEspera";


@Injectable({
    providedIn:"root"
})
export class TiempoEsperaService{
    private url="http://127.0.0.1:8000/tiempoespera/";

constructor(private http:HttpClient){} 

getList():Observable<any>{
    return this.http.get(this.url);

}
 delete(id:number){
  return this.http.delete(this.url+id+"/")
 }


  enviarTiempo(data:any) {
    return this.http.post(this.url, data);
  }
  
  getTiempo(idivr: number): Observable<TiempoEspera[]> {
    console.log(idivr)
    return this.http.get<TiempoEspera[]>(this.url + '?llave_foranea=' + idivr);

  }

  getTiemp(id: number, idivr:number,tiempo:string){
    console.log("jwdddd",tiempo, id, idivr)
    return this.http.put(this.url + id + '/' , { idivr, tiempo});

  }
  update(data:TiempoEspera){
    return this.http.put(this.url + data.id + "/", data)
  }

}

  
