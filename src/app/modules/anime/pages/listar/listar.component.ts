import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IAnime } from '@modules/anime/interface/anime';
import { AnimeService } from '@modules/anime/service/anime.service';
import { offset } from '@popperjs/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

cards : IAnime[] = [];
offset = 0;

cardText = new FormControl('');
a !: string|null;

constructor(private animeService: AnimeService){}

ngOnInit(): void {
//this.cards = []
//this.buscarCards();
//this.inputReactivo();
}

inputReactivo(){
  this.cardText.valueChanges
  .pipe(debounceTime(500)
  ).subscribe(res => {
    this.cards = [];
    this.buscarCardsForma2(res);
  });
  this.cards = [];
  this.buscarCardsForma2();
}

/*
onScroll(){
  console.log('scroll infinito');
  this.offset += 50;
 // this.buscarCards();
 this.buscarCardsForma2();
}
*/
onScroll(paraBuscar : string | null){
  console.log('scroll infinito');
  this.offset += 50;
  console.log(paraBuscar);
  this.animeService.busquedas(this.a,this.offset);
}

buscarCards(){
  this.animeService.getCardsAnime(this.offset).subscribe((res) => {
    console.log(res);
    this.cards = [...this.cards,...res];
  })
}

buscarCardsForma2(nombreCard : string | null = null){
  this.animeService.getCardsAnimeForma2(nombreCard,this.offset).subscribe((res) => {
    console.log(res);
    this.cards = [...this.cards,...res];
  })
}

get resultados(){
  return this.animeService.cards;
}

}
