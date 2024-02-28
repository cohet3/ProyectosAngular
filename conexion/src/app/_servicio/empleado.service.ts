import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../_modelo/empleado';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url:string= 'http://localhost:8080/empleados';
  empleadoCambio =new Subject<Empleado[]>();

  listar(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.url);
  }
  alta(e: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(this.url, e);
  }

  constructor(private http:HttpClient) { }
}
