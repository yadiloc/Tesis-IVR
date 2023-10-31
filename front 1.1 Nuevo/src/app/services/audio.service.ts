import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class AudioService{
    private url="http://127.0.0.1:8000/audio/";

constructor(private http:HttpClient){} 

getList():Observable<any>{
    return this.http.get(this.url);

}
 delete(id:number){
  return this.http.delete(this.url+id+"/")
 }


  enviarAudio(nombre: string, audioFile: File) {
    const formData = new FormData();
    const headers = new HttpHeaders();
    formData.append('nombre', nombre);
    formData.append('archivo', audioFile);

    return this.http.post(this.url, FormData, { headers });
  }



  postFormData(formData: FormData) {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });

    return this.http.post(this.url, formData, { headers });
  }
}