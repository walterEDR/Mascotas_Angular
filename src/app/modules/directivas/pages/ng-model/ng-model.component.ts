import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {

  titulo = 'Directiva NgModel';
  nombre = '';
  nombre2 = '';

  formatNombre(): void{
    this.nombre = this.nombre.toLocaleLowerCase();
    this.nombre2 = this.nombre.toLocaleLowerCase();
  }

}
