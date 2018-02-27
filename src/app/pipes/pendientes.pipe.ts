import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/listas';

@Pipe({
    name: 'pendientes',
    pure: false
})

export class PendientesPipe implements PipeTransform {
    transform(listas: Lista[], estado:Boolean = false ): Lista[] {
        
        let listaFiltrada: Lista[] = [];

        for (let lista of listas) {
            if (lista.terminada == estado) {
                listaFiltrada.push(lista);
            }
        }

        return listaFiltrada;

    }
}