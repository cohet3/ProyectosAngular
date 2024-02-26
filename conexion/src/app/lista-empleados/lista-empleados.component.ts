import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../_servicio/empleado.service';
import { Empleado } from '../_modelo/empleado';
import { AltaEmpleadoComponent } from '../alta-empleado/alta-empleado.component';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [AltaEmpleadoComponent],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit{
  constructor(private servicio: EmpleadoService) { }
  empleados: Empleado[] = [];

  ngOnInit(): void {
    this.servicio.listar()
    .subscribe(datos=> {
      this.empleados = datos;
    })
  }

}
