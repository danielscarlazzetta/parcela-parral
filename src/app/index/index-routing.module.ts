import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ProyectoLoteoComponent } from './pages/proyecto-loteo/proyecto-loteo.component';
import { FormularioContactoComponent } from './pages/formulario-contacto/formulario-contacto.component';
import { QuienessomosComponent } from './pages/quienessomos/quienessomos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'index', component: IndexComponent},
      {path: 'loteos', component: ProyectoLoteoComponent},
      {path: 'contacto', component: FormularioContactoComponent},
      {path: 'quienessomos', component: QuienessomosComponent},
      {path: '**', redirectTo: 'index'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
