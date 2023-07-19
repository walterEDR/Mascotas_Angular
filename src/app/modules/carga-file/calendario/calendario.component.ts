import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calendar, CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import { EventImpl } from '@fullcalendar/core/internal';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  nuevoEvento !: EventInput ;

  modalRef !: BsModalRef;


  @ViewChild('templateNuevo') templateNuevo !: string;
  @ViewChild('templateEditar') templateEditar !: string;
  config = {
    animated : true
  }

  formEvento !: FormGroup;

  formEditEvento !: FormGroup;
  editEvento !: EventImpl;
  calendarEvent !: EventInput[];


  constructor (private modalService: BsModalService, private fb:FormBuilder){}


  eventos : any = [
    {title: 'Aprender Algo de angular', date: '2023-07-10', color: 'red',
  start: new Date().setDate(new Date().getDate() + 5),
  end: new Date().setDate(new Date().getDate() + 8)},
    {title: 'Aprender Algo de json', date: '2023-07-11', color: 'red',
    start: new Date().setDate(new Date().getDate() + 5),
    end: new Date().setDate(new Date().getDate() + 8)},
    {title: 'Aprender Algo de javascript', date: '2023-07-12', color: 'red',
    start: new Date().setDate(new Date().getDate() + 5),
    end: new Date().setDate(new Date().getDate() + 8)}
  ];



  calendarOptions: CalendarOptions = {
    plugins: [
      dayGridPlugin, interactionPlugin,
    ],
    initialView: 'dayGridMonth',
    themeSystem : 'boostrap',
    events : this.eventos,
    dateClick : this.openModal.bind(this),
    eventClick : this.hanleEventClick.bind(this),
  };

  openModal(event : EventInput){
      this.nuevoEvento = event;
      this.modalRef = this.modalService.show(this.templateNuevo, this.config);
  }
  ngOnInit(): void {
    this.formEvento = this.fb.group({
      title : ['',[Validators.required]],
    });
    this.formEditEvento = this.fb.group({
      editTitle : ['',[Validators.required]],
    });
   // this.actualizar();
  }

  guardarEvento(){
    if(this.formEvento.valid){
      const title = this.formEvento.get('title')!.value;
      const calendar: Calendar = this.nuevoEvento["view"].calendar;
      calendar.addEvent({
        id: '4',
        title: title,
        start: this.nuevoEvento.date,
        end: this.nuevoEvento.date,
        className: 'bg-success text-white',});

        this.formEvento = this.fb.group({
          title : '',
        });

        this.closeEventModal();
        this.modalRef?.hide();
    }
  }

  closeEventModal(){
    this.formEvento = this.fb.group({
      title : '',
    });
    this.modalRef?.hide();
  
  }

  hanleEventClick(datos : EventClickArg){
    this.editEvento = datos.event;
    this.formEditEvento = this.fb.group({
      title : `${datos.event.title}`,
    });
    this.modalRef = this.modalService.show(this.templateEditar, this.config);
  }

  guardarEdicion(){
    const editTitle = this.formEditEvento.get('title')!.value;
    const editId = this.calendarEvent.findIndex((value) => {
      value.id+'' === this.editEvento.id+''});
      this.editEvento.setProp('title', editTitle);

      this.calendarEvent[editId] = {
        ...this.editEvento,
         title : editTitle,
      id : this.editEvento.id,
      classNames : 'bg-success text-white',};

    this.formEditEvento = this.fb.group({
      editTitle : '',
    });
    this.modalRef?.hide();
  }

  confirm(){
    Swal.fire({
      title : '¿Estas seguro?',
      text : 'No podras revertir esta accion',
      icon : 'warning',
      showCancelButton : true,
      confirmButtonColor : '#3085d6',
      cancelButtonColor : '#d33',
      confirmButtonText : 'Si, eliminar',
      cancelButtonText : 'Cancelar'
    }).then((result) => {
      if(result.value){
        this.deleteEventData();
        Swal.fire('Eliminado', 'El evento ha sido eliminado', 'success');
    }
    });
  }

  deleteEventData(){
    this.editEvento.remove();
    this.modalRef?.hide();
  }

}
