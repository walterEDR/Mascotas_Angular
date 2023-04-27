import { Component } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {

  mascotas : IMascota[] = [];
  parametroBuscar : string = '';
  constructor( private mascotasService: MascotasService, private toastr : ToastrService){

  }

  ngOnInit(): void {
  this.mascotasService.mascotas.subscribe((resp)=>{
    this.mascotas = resp;
  })
  }

  buscar() : void {
      this.mascotasService.buscarMascota(this.parametroBuscar).subscribe((resp)=>{
        this.mascotas = resp;
      })
  }

  elimarMascota(pet:IMascota){
    Swal.fire({
      title : '¿Estas seguro de eliminar?',
      text : `Esta seguro de borrar a ${pet.raza}`,
      icon : 'question',
      showCancelButton : true,
      confirmButtonColor : '#3085d6',
      cancelButtonColor : '#d33',
    confirmButtonText : 'Si, Eliminar !'
    }).then((result : any) => {
      if(result.isConfirmed){
        // actualizar el array omitiendo la mascota eliminada
        this.mascotas = this.mascotas.filter((objMascota:IMascota) => objMascota.id!== pet.id)
        // para quitar definitivo del json
        this.mascotasService.borrarMascota(pet).subscribe((resp:any) => {
          this.toastr.success('El resgistro fue eliminado con exito','Eliminado',{ positionClass : 'toast-top-right'});
        }, (err:any) => {
          Swal.fire({
            icon : 'error',
            title : 'Error',
            text : err.error.msg,
          });
        });

      }
    })
  }


}
