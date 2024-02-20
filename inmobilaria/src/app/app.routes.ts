import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
    
    {"path": "home", "component": HomeComponent},
    {"path": "detalle/:id", "component": DetalleComponent},
    {"path": "", redirectTo: "home", pathMatch: 'full'},
    {"path": "**", component: HomeComponent}
];
