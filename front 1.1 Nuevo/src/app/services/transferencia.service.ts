import {  HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transferencia } from "../models/transferencia";


@Injectable({
    providedIn:"root"
})
export class TransferenciaService{
    public url="http://127.0.0.1:8000/transferencia/";

constructor(public http:HttpClient){}

getList():Observable<any>{
    return this.http.get(this.url);

}
 delete(id:number){
  return this.http.delete(this.url+id+"/")
 }
 
 post(data:any){
    return this.http.post(this.url, data)
 }
  
 getTrans(idivr: number): Observable<Transferencia[]> {
    console.log(idivr)
    return this.http.get<Transferencia[]>(this.url + '?llave_foranea=' + idivr);

  }

  update(data:Transferencia){
    console.log(data)
    return this.http.put(this.url + data.id + "/", data)
  }
}