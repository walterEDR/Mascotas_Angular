import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargaFileRoutingModule } from './carga-file-routing.module';
import { CargaFileComponent } from './carga-file/carga-file.component';


@NgModule({
  declarations: [
    CargaFileComponent
  ],
  imports: [
    CommonModule,
    CargaFileRoutingModule
  ]
})
export class CargaFileModule { }
