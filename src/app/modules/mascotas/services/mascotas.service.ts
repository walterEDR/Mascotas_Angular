import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMascota } from '../interface/mascotas.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private  baseUrl:string = environment.baseUrl; //url backend


  constructor( private http : HttpClient) { }

  get mascotas() : Observable<IMascota[]> {
    return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`);
  }

  buscarMascota( termino : string ) : Observable<IMascota[]>{
    if (termino.length > 1) {
      return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas/?q=${termino}&_limits=5`);
    } else {
      return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`);
    }
  }

  buscarMascotaId(id: string): Observable<IMascota> {
    if (id.length > 0) {
      return this.http.get<IMascota>(`${this.baseUrl}/mascotas/${id}`);
    } else {
      return this.http.get<IMascota>(`${this.baseUrl}/mascotas/`);
    }
  }

  DeleteMascota(id: string): Observable<IMascota> {
    if (id.length > 0) {
      return this.http.delete<IMascota>(`${this.baseUrl}/mascotas/${id}`);
    } else {
      return this.http.delete<IMascota>(`${this.baseUrl}/mascotas/`);
    }
  }

  borrarMascota(id: IMascota): Observable<IMascota> {

      return this.http.delete<IMascota>(`${this.baseUrl}/mascotas/${id}`);
    }

    nuevaMascota(pet : IMascota): any {
      console.log(pet);
      const url = `${this.baseUrl}/mascotas/`;
      return this.http.post(url,pet);
    }

    editarMascota(pet : IMascota): any {
      console.log(pet);
      const url = `${this.baseUrl}/mascotas/${pet.id}`;
      return this.http.put(url,pet);
    }

    



}
