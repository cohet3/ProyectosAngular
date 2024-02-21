import { Injectable } from '@angular/core';
import { Articulo } from '../_modelo/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosServicioService {
  articulos =[
    {
      "id": 1,
      "titulo": "Hacking ético",
      "resumen":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates libero animi id quibusdam tempore, recusandae numquam dignissimos. Amet inventore, pariatur cumque obcaecati iure vitae molestias perferendis saepe culpa dolores?",
      "imagen": "https://www.codigosinformaticos.com/wp-content/uploads/2019/05/hacking-etico.jpg" 
    },
    {
      "id": 2,
      "titulo": "Legislación de seguridad en Europa",
      "resumen":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates libero animi id quibusdam tempore, recusandae numquam dignissimos. Amet inventore, pariatur cumque obcaecati iure vitae molestias perferendis saepe culpa dolores?",
      "imagen": "https://th.bing.com/th/id/OIP.AEs3vko-WupAjykhk2DTCQHaEL?rs=1&pid=ImgDetMain"
    },
    {
      "id": 3,
      "titulo": "¿Cómo evitar que te hackeen la cuenta?",
      "resumen":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates libero animi id quibusdam tempore, recusandae numquam dignissimos. Amet inventore, pariatur cumque obcaecati iure vitae molestias perferendis saepe culpa dolores?",
      "imagen": "https://th.bing.com/th/id/R.13dc4ddb5237e968d8d13e47d91918ff?rik=0cGbf5Z%2fnXmMXg&pid=ImgRaw&r=0"
    },
    {
      "id": 4,
      "titulo": "¿Qué es phising?",
      "resumen":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates libero animi id quibusdam tempore, recusandae numquam dignissimos. Amet inventore, pariatur cumque obcaecati iure vitae molestias perferendis saepe culpa dolores?",
      "imagen": "https://img.interempresas.net/fotos/1795779.jpeg" 
    },
    {
      "id": 5,
      "titulo": "¿Que datos Nunca te deben pedir?",
      "resumen":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates libero animi id quibusdam tempore, recusandae numquam dignissimos. Amet inventore, pariatur cumque obcaecati iure vitae molestias perferendis saepe culpa dolores?",
      "imagen": "https://actionwsi.com/wp-content/uploads/2020/03/Datos-que-no-debes-pedir-en-un-formulario.jpg" 
    },
    {
      "id": 6,
      "titulo": "¿Por qué aprender linux?",
      "resumen":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates libero animi id quibusdam tempore, recusandae numquam dignissimos. Amet inventore, pariatur cumque obcaecati iure vitae molestias perferendis saepe culpa dolores?",
      "imagen": "https://www.pngall.com/wp-content/uploads/5/Linux-Logo-PNG-Download-Image.png" 
    },
  ]


  constructor() { }
obtenerArticulo(indice:number){
  return this.articulos[indice];
}
obtenerTodosArticulos(){
  return this.articulos;
}
altaArticulo(articulo: Articulo){
this.articulos.push(articulo);
}
}
