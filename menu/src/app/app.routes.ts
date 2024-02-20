import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
    {"path": "inicio", "component": InicioComponent},
    {"path": "detalle/:id", "component": DetalleComponent},
    {"path": "quienes", "component": QuienesSomosComponent},
    {"path": "donde", "component": DondeEstamosComponent},
    {"path": "contacto", "component": ContactoComponent}
];
