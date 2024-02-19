import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-armapc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './armapc.component.html',
  styleUrl: './armapc.component.css'
})
export class ArmapcComponent {
tRAM: string="";
tamanosRAM: string []=["32GB", "16GB", "8GB"];
procesador:string='';
procesadores:string[]= ["Intel Core i7", "Intel Core i5", "Intel Core i3"];
tarjetaGrafica: boolean=false;
discoDuro: string="HDD";
discosDuros: string[]=["HDD","SSD"]
fuenteAlimentacion:string="600W";
fuentesAlimentacion: string[]=["600W", "700W", "800W","1000W", "1200W"]

mostrarInfo():void{
  let mensaje: string = `
  Su configuración es la siguiente
  Tamaño de la RAM ${this.tRAM}
  Procesador ${this.procesador}
  Tarjeta gráfica ${this.tarjetaGrafica}
  Disco duro ${this.discoDuro}
  Fuente de alimentación ${this.fuenteAlimentacion}`
  alert(mensaje);
}
}
