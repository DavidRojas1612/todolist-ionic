import { Pipe, PipeTransform } from '@angular/core';
import { Lista} from '../clases/listas';

@Pipe({
    name: 'terminadas',
    pure: false
})

export class TerminadasPipe implements PipeTransform {
    transform(listas: Lista[], estado:Boolean = true ): Lista[] {
        
        let listaFiltrada: Lista[] = [];

        for (let lista of listas) {
            if (lista.terminada == estado) {
                listaFiltrada.push(lista);
            }
        }

        return listaFiltrada;

    }
}