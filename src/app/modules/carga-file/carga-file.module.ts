import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargaFileRoutingModule } from './carga-file-routing.module';
import { CargaFileComponent } from './carga-file/carga-file.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    CargaFileComponent,
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    CargaFileRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    ModalModule.forRoot(),
  ]
})
export class CargaFileModule { }
