import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent {

  mascota !: IMascota;
  constructor(
    private activatedRoute : ActivatedRoute,
    private mascotasService : MascotasService,
    private router : Router
  ){}

  ngOnInit() : void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.mascotasService.buscarMascotaId(id)))
    .subscribe((res : IMascota ) => {
      this.mascota = res;
    });

  }


    Eliminar(){
      this.activatedRoute.params
      .pipe(switchMap(({id}) => this.mascotasService.DeleteMascota(id)))
      .subscribe((res : IMascota ) => {
        this.mascota = res;
      });
      this.regresar();
    }

    regresar(){
      this.router.navigate(['mascotas/listar']);
    }

}
