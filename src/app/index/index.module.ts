import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { ProyectoLoteoComponent } from './pages/proyecto-loteo/proyecto-loteo.component';
import { QuienessomosComponent } from './pages/quienessomos/quienessomos.component';
import { FormularioContactoComponent } from './pages/formulario-contacto/formulario-contacto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    ProyectoLoteoComponent,
    QuienessomosComponent,
    FormularioContactoComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
  ]
})
export class IndexModule { }
