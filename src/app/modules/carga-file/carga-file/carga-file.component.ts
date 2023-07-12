import { Component } from '@angular/core';
import { CargaFileService } from '../service/carga-file.service';

@Component({
  selector: 'app-carga-file',
  templateUrl: './carga-file.component.html',
  styleUrls: ['./carga-file.component.scss']
})
export class CargaFileComponent {

  file !: File;

  myFiles : string[] = [];

constructor(private cargaService : CargaFileService){}

  onFileSelected(event : Event){
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
  }

  subir(){
  this.cargaService.upload(this.file).subscribe((resp) => {
    console.log('respuesta',resp);
  });
  }

  onFileChange(event : any){
    for(let i = 0 ; i < event.target.files!.length ; i++){
      this.myFiles.push(event.target.files[i]);
    }
  }

  multiple(){
    this.cargaService.multiple(this.myFiles).subscribe((resp) => {
      console.log('respuesta',resp);
    });
  }


}
