import { Injectable, Input } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

// Indica que la clase se puede inyectar
@Injectable()
export class DbzService {
    constructor(){
      console.log('Servicio inicializado');  
    }
    
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
}