import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArrayComponent, MetodoPagoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arrayEjemplos';
}
