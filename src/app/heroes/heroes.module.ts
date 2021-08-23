import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
@NgModule({
    declarations: [
        // Esto esta invisible para toda la app menos 
        // para los componentes definidos dentro de este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        // Lo que quiero hacer visible fuera de este modulo
        ListadoComponent
    ],
    imports: [
        // Aqui van modulos
        CommonModule
    ]
})

export class HeroesModule {}