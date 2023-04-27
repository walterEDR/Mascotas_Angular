import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {

  tema : string = 'Uso de ngClass'

  //variable que cambiara la clase de la alerta con el ngClass
  alerta: string = 'alert-danger'

  // objetivo a usar en el ngClass
  propiedad = {
    danger : false,
  };

  // para usar ngClass usando condicion
  message:number = 5;
  
}
