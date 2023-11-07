import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicepruebaService {
  apiUrl = 'http://localhost:8000/audio/'; // URL de tu API en Django

    constructor(private http: HttpClient) {}

enviarAudio(idivr: number, audios: File): Observable<any> {
      const formData: FormData = new FormData();
      formData.append('idivr', String(idivr));
      formData.append('audios', audios);
  
      return this.http.post(this.apiUrl, formData);
    }
}
