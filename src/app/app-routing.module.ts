import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from '@modules/nopage/nopage.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FormularioComponent } from '@shared/formulario/formulario.component';

//matriz de objetos para las rutas
const routes: Routes = [
  //las rutas estan entre llaves
  {
    path: '',
    component: SkeletonComponent,
    children: [
      { path: 'home', loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule) },
      { path: 'directivas', loadChildren: () => import('@modules/directivas/directivas.module').then((m) => m.DirectivasModule) },
      { path : 'mascotas', loadChildren : () => import('@modules/mascotas/mascotas.module').then((m) => m.MascotasModule) },
      { path: 'formulario', component:FormularioComponent }
    ]
  },

  { path: '**', component:NopageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
