import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmpleadoDinamicoComponent } from './empleado-dinamico/empleado-dinamico.component';
import { ArmapcComponent } from './armapc/armapc.component';
import { VuelosComponent } from './vuelos/vuelos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet, EmpleadoDinamicoComponent, ArmapcComponent, VuelosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'htmlDirectivas';
}
