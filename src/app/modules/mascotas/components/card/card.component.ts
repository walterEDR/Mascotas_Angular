import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() obj!:IMascota;

  @Output()
  eliminar = new EventEmitter<IMascota>();

  constructor(private mascotasService : MascotasService, private toastr : ToastrService,private router : Router ){

  }

  borrar(pet:IMascota){

  }

  eliminarPets(obj : IMascota){
    this.eliminar.emit(obj); // para enviar la accione al componente padre, enviamos el id al eliminar
  }

}
