import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/inmueble';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  @Input() id:string = "";
  inmueble:Inmueble = new Inmueble();
  constructor(private inmuebleServicio: InmuebleService){}
  
  ngOnInit(): void {
    console.log("id->"+this.id);
    this.inmueble = this.inmuebleServicio.obtenerUno(this.id);
  }

}
