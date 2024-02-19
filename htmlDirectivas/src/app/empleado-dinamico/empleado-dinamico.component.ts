import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado-dinamico',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado-dinamico.component.html',
  styleUrl: './empleado-dinamico.component.css'
})
export class EmpleadoDinamicoComponent {
generos: string []= ["Mujer", "Hombre", "Otro"];
genero:string="";
nacionalidad:string="";
nacionalidades: string []= ["Española", "Norteamericana", "Africano", "Cubana"];
lenguajesProgramacion: string[]= ["C++", "Java", "Python", "JavaScript"];
cMas:boolean=false;
java:boolean=false;
JS:boolean=false;
python:boolean=false;

mostrarInfo():void{
  let mensaje:string=
  `Genero: ${this.genero}
  Nacionalidad : ${this.nacionalidad}
  Lenguajes de Programación : ${this.lenguajesProgramacion}`
  alert(mensaje);
}
}
