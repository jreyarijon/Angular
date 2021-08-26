import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent{

  @Input('pjs') personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje= {
    nombre: "Jefe",
    poder: 100000
  }

  agregarNuevoPersonaje( obj: Personaje){
    this.personajes.push( obj );
  }

  // Estamos inyectando el servicio en el contructor
  constructor(private dbzService: DbzService) {}
  
}
