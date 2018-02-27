import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
    
})
export class PendientesComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseosService,
                private NavCtrl: NavController) { }

    ngOnInit() { }

    Agregar(){
        this.NavCtrl.push(AgregarComponent);
    }

    verDetalle(lista,idx){
        this.NavCtrl.push(DetalleComponent, {lista,idx});
    }
}