import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './array.component.html',
  styleUrl: './array.component.css'
})
export class ArrayComponent {
  nombres: string[] = ['Juan', 'Pedro', 'María'];
  edades: number[]=[18, 20, 19, 16, 35, 55, 15];
  edadesFiltradas: number[]=[];
  edadesDobles: number[]=[];
  nombre:string="";
  agregar():void{
    this.nombres.push(this.nombre);
  }
  eliminar():void{
    this.nombres.pop();
  }
  recorrerArray ():void{
    this.nombres.forEach(elemento=>console.log(elemento));
  }
  filtrarArray ():void{
    this.edadesFiltradas.filter(elemento=>elemento>18);
    this.edadesFiltradas.forEach(elemento => console.log(elemento))

  }
  calcularDoble():void{
    this.edadesDobles.map(elemento=>elemento*2);
    this.edadesDobles.forEach(elemento => console.log(elemento))
  }
}
