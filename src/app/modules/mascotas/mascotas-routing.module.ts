import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './page/listar/listar.component';
import { MascotaComponent } from './page/mascota/mascota.component';

const routes: Routes = [
  {path : 'listar', component : ListarComponent, title : 'listar' },
  {path : ':id', component : MascotaComponent, title : 'detalle '},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
