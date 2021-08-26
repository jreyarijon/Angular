import { Injectable, Input } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {
    constructor() {}
    
     private _personajes: Personaje[] = [
      {
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegeta',
        poder: 7500
      }
    ];

    get personajes(): Personaje[] {
      return [...this._personajes];
    }

    agregarPersonaje( pj: Personaje) {
      this._personajes.push( pj );
    } 
}