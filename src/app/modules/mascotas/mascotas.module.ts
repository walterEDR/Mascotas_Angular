import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListarComponent } from './page/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MascotaComponent } from './page/mascota/mascota.component';
import { NuevoComponent } from './page/nuevo/nuevo.component';
import { ImagenEmptyPipe } from './pipes/imagen-empty.pipe';



@NgModule({
  declarations: [
    CardComponent,
    ListarComponent,
    MascotaComponent,
    NuevoComponent,
    ImagenEmptyPipe,
    ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MascotasModule { }
