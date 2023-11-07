import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Audios } from "../models/audio";

@Injectable({
    providedIn: "root"
})
export class AudioService {
    private url = "http://127.0.0.1:8000/audio/";

    constructor(private http: HttpClient) { }

    getList(): Observable<any> {
        return this.http.get(this.url);

    }
    delete(id: number) {
        return this.http.delete(this.url + id + "/")
    }

    post(data: any){
        const formData: FormData = new FormData();
        // const fileAudio = data.audios.toString();
        formData.append("audio", data.audios);
        console.log( data)
        // formData.append("idivr", data.idivr.toString())
        return this.http.post<any>(this.url, data).subscribe()
    }


   

}