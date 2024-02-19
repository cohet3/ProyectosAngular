import { Routes } from '@angular/router';
import { ArmapcComponent } from './armapc/armapc.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { EmpleadoDinamicoComponent } from './empleado-dinamico/empleado-dinamico.component';

export const routes: Routes = [
    {path: 'arma', component: ArmapcComponent},
    {path: 'reserva', component: VuelosComponent},
    {path: 'empleado', component: EmpleadoDinamicoComponent}
];
