import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from "../../services/heroes.services";
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:any[] = []
  termino:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
    ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      //console.log(this.heroes);
      })
  }

  verHeroe(idx:number){
    this.router.navigate( ['/heroe', idx] );
  }
}
