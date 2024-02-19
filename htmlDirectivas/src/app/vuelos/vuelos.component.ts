import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vuelos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vuelos.component.html',
  styleUrl: './vuelos.component.css'
})
export class VuelosComponent {
  origenes: string []= ["Ibiza", "NY", "California"];
  origen:string="Ibiza";
  ciudades: string[]=["Ibiza", "NY", "California","Madrid", "Vigo", "Sevilla"];
  destinos: string []= ["Madrid", "Vigo", "Sevilla"];
  destino:string="Madrid";

  fechaIda:Date=new Date();

  fechaVuelta:Date=new Date();

  numeroPasajeros:number=1;
  realizarReserva():void{
    let mensaje:string=
    `Origen: ${this.origen}
    Destino : ${this.destino}
    Fecha Ida : ${this.fechaIda}
    Fecha Vuelta : ${this.fechaVuelta}
    Número de pasajeros: ${this.numeroPasajeros}`

    alert(mensaje);
  }
}
