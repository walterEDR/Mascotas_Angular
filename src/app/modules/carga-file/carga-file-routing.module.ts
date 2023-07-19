import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaFileComponent } from './carga-file/carga-file.component';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  {path:'simple', component : CargaFileComponent},
  {path:'calendario', component : CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargaFileRoutingModule { }
