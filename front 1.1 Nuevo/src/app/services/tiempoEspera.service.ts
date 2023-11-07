import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


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
}