import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bienvenida } from "../models/bienvenida";

@Injectable({
    providedIn:"root"
})
export class BienvenidaService{
    private url="http://127.0.0.1:8000/bienvenida/";

constructor(private http:HttpClient){} 

getList():Observable<any>{
    return this.http.get(this.url);

}
 delete(id:number){
  return this.http.delete(this.url+id+"/")
 }
 post(data:Bienvenida){
  return this.http.post(this.url, data)
}
}