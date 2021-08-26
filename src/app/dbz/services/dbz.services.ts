import { Injectable } from "@angular/core";

// Indica que la clase se puede inyectar
@Injectable()
export class DbzService {
    constructor(){
      console.log('Servicio inicializado');  
    }
    
}