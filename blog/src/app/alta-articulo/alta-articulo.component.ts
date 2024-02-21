import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Articulo } from '../_modelo/articulo';
import { ArticulosServicioService } from '../_servicios/articulos-servicio.service';

@Component({
  selector: 'app-alta-articulo',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './alta-articulo.component.html',
  styleUrl: './alta-articulo.component.css'
})
export class AltaArticuloComponent {

  constructor(private articuloServicio: ArticulosServicioService){}
  articulo:Articulo=new Articulo();
  alta():void{
    this.articuloServicio.altaArticulo(this.articulo);
    console.log(this.articuloServicio.obtenerTodosArticulos());
  }

}
