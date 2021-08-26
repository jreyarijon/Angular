import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  constructor( private dbzService: DbzService) {}

  @Input('new') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(){
    if( this.nuevo.nombre.trim().length === 0 ){ return; }

    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
