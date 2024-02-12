import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEstudiantesService {

  private url = 'http://localhost:3000/estudiantes';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<any> {
    console.log('Obitne Estudiantes');
    return this.http.get<any>(this.url);
  }

  nuevoEstudiante(datosEstudiante: any): Observable<any> {
    console.log('Guarda un Estudiante');
    return this.http.post(this.url, datosEstudiante);
  }

  elimnarEstudiante(idEstudiante: string): Observable<any> {
    console.log('Elimina un Estudiante');
    return this.http.delete(`${this.url}/${idEstudiante}`);
  }

  obetnerEstudiante(idEstudiante: string): Observable<any> {
    console.log('Elimina un Estudiante');
    return this.http.get(`${this.url}/${idEstudiante}`);
  }

  editarEstudiante(idEstudiante: string, datosEstudiante: any): Observable<any> {
    console.log('Edita un estudiante');
    return this.http.put(`${this.url}/${idEstudiante}`, datosEstudiante);
  }

}
