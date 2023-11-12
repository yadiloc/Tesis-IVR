import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Texto } from "../models/texto";
import { data } from "jquery";


@Injectable({
    providedIn:"root"
})
export class TextoService{
    private url="http://127.0.0.1:8000/texto/";

constructor(private http:HttpClient){} 

getList():Observable<any>{
    return this.http.get(this.url);

}
 delete(id:number):any{
  return this.http.delete(this.url+id+"/")
 }

  enviarTexto(data:Texto) {
    return this.http.post(this.url, data);
  }

  // getTexto(idivr:number):Observable<any>{
  //   return this.http.get( this.url +idivr+ '/')
  // }

  updateTexto(id:number, contenido:string):Observable<any>{
  return this.http.put(this.url+id+"/", {contenido})
  }



  getTexto(idivr: number): Observable<Texto[]> {
    console.log(idivr)
    return this.http.get<Texto[]>(this.url + '?llave_foranea=' + idivr);

  }

  update(data:Texto){
    console.log(data)
    return this.http.put(this.url + data.id + "/", data)
  }
}
