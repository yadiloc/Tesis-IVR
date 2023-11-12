import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class IvrAgregationService {
    private url = "http://127.0.0.1:8000/agregation/";

    constructor(private http: HttpClient) { }
   
  



  }
