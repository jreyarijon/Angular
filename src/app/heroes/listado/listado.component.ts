import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
    // borra el ultimo elemento
    //this.heroes.pop();
    // borra el primer elemento
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
