import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // Comparte el arreglo entre componente padre e hijos
  @Input('data') personajes: Personaje[] = [];

}
