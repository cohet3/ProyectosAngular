import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
correo:string= "";
nombre: string="";
telefono:string="";
comentario: string = "" ;
mensaje: string = "" ;


enviado:boolean = false;
enviarInfo(){
  this.enviado = true;
  this.mensaje = "Mensaje enviado";
}

}
