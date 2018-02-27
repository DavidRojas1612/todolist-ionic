import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';


@Injectable()
export class ListaDeseosService {

    listas: Lista[] = []

    constructor() {

        // let lista1 = new Lista('compras de supermercado');
        // let lista2 = new Lista('juegos a comprar');
        // let lista3 = new Lista('compras de la unive');

        // this.listas.push(lista1);
        // this.listas.push(lista2);
        // this.listas.push(lista3);

        console.log("servicio inicializado");
        this.cargarData();
        
     }

     //obtiene el listado de las listas y las guarda en el local storage
        //JSON.stringify convierte objetos tipo arreglos en  arreglos tipo string formato json
     actualizarData(){
        localStorage.setItem("data", JSON.stringify(this.listas) );
     }

     //actualiza objeto listas
        //JSON.parse agarra el objeto string  y lo vuelve en objero tipo "lista"
     cargarData(){
         if(localStorage.getItem("data")){
             
             this.listas = JSON.parse(localStorage.getItem("data"));
         }
     }

     agregarLista(lista:Lista){
        this.listas.push(lista);
        this.actualizarData();

     }
}