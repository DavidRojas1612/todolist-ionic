import { Component, OnInit } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import { Lista,ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {
    idx:number;
    lista:any;
    constructor(public navCtrl:NavController, 
                public navParams:NavParams,
                public _listaDeseos:ListaDeseosService,
                public alertCtrl: AlertController)
    { 
        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
        

    }   

    ngOnInit() { }

    actualizarData(item:ListaItem){
        item.completado = !item.completado

        let todosMarcados=true;
        for (let item of this.lista.items) {
            if (!item.completado) {
                todosMarcados = false;
                break;
            }
        }
        this.lista.terminada = todosMarcados;
        this._listaDeseos.actualizarData();
    }

    borrarLista(){
        let confirm = this.alertCtrl.create({
            title: 'Borrar lista',
            message: 'Está seguro que desea borrar la lista?',
            buttons: [
              {
                text: 'Cancelar',
                handler: () => {
                  return;
                }
              },
              {
                text: 'Aceptar',
                handler: () => {
                  console.log('Agree clicked');
                  this._listaDeseos.listas.pop();
                  this._listaDeseos.actualizarData();
                  this.navCtrl.pop();
                }
              }
            ]
          });
          confirm.present();
    }
}