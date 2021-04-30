import { Component } from '@angular/core'; //paso 2: decorador: vamos a importar el component

@Component({                                //paso 3: con el @ llamamos el component y configuramos. sig: app.module.ts
    selector: 'app-header',                 // el selector: se recomienda poner "app" seguido del nombre.  luego cuando lo necesite en  app.component.html escribimos el script para llamarlo.
    templateUrl: './header.component.html'  //temple es una forma de conf. cuando el temple tiene maa de 4 lineas de codigo es recomendable crear un archivo independiente que se encargue de manejar todo el html.

})
export class HeaderComponent {         //paso 1: crear clase. colocar export para poder llamar desde otro lugar mas adelante.

}