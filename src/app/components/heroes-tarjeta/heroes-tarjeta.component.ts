import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html'
})
export class HeroesTarjetaComponent implements OnInit {

@Input() heroe:any = []
@Input() Indice:number;

@Output() heroeSeleccionado: EventEmitter<number>;
  constructor(
    private router:Router
  ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
  //  console.log(this.Indice);
   this.router.navigate( ['/heroe', this.Indice] );

  // this.heroeSeleccionado.emit(this.Indice);
  }
}
