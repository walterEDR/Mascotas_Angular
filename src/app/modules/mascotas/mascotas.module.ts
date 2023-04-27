import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListarComponent } from './page/listar/listar.component';
import { FormsModule } from '@angular/forms';
import { MascotaComponent } from './page/mascota/mascota.component';


@NgModule({
  declarations: [
    CardComponent,
    ListarComponent,
    MascotaComponent,


  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    FormsModule
  ]
})
export class MascotasModule { }
