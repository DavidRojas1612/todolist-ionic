import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
    
})
export class TerminadosComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseosService,
        private NavCtrl: NavController) { }

    ngOnInit() { }

    verDetalle(lista,idx){
        this.NavCtrl.push(DetalleComponent, {lista,idx});
    }
}