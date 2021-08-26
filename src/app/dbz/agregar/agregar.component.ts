import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input('new') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output('newPj') onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if( this.nuevo.nombre.trim().length === 0 ){ return; }
    
    console.log(this.nuevo);
    // Emitir el objeto entre ()
    this.onNewPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
