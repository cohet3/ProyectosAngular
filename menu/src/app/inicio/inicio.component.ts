import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
productos=[
  {
    "productoId":"1",
    "nombre":"Teclado",
    "descripcion":"teclado apple chulo y caro" ,
    "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMR3Y?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1645719947834",
    "precio":1000
  },
  {
    "productoId":"2",
    "nombre":"Raton",
    "descripcion":"Logitec ergonomico",
    "img": "https://m.media-amazon.com/images/I/61ni3t1ryQL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "precio":100
  },
  {
    "productoId":"3",
    "nombre":"USB 3.0",
    "descripcion":"USB 3.0 32GB",
    "img": "https://m.media-amazon.com/images/I/51+G3V1UhkS._AC_SL1200_.jpg",
    "precio":50
  }
]
}
