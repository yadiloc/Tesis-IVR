import {  HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ivrs } from "../models/ivr.model";

@Injectable({
    providedIn:"root"
})
export class IvrService{
    public url="http://127.0.0.1:8000/ivr/";

constructor(public http:HttpClient){}

getList():Observable<Ivrs[]>{
    return this.http.get<Ivrs[]>(this.url);

}
 delete(id:number){
  return this.http.delete(this.url+id+"/")
 }
 post(data:any){
    return this.http.post(this.url, data)
 }

 
 
 update( data:any){
    return this.http.put(this.url+data.id+"/", data)
  }
}