import {  HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ivr } from "../components/menuivr/menuivr.component";
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


}