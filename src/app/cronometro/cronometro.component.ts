import { Component} from '@angular/core';

@Component({
    selector:'cronometro',
    templateUrl:'./cronometro.component.html',
    styleUrls: ['./cronometro.component.css']
})

export class Cronometro{
    public titulosss = 'Titulo de cronometro';

    public hora:number = 0;
    public minutos:number = 0;
    public segundos:number = 0;

    public con=0;
    public colection:Array<any> = [];
    public contador:any;
    constructor(){

    }
    start(){
        if(this.contador == undefined) {
            this.contador = setInterval(()=> {
                    this.segundos += 1;
                    if (this.segundos == 60) {
                        this.segundos = 0;
                        this.minutos += 1;
                        if (this.minutos == 60) {
                            this.minutos = 0;
                            this.hora += 1;
                            if (this.hora = 24) {
                                this.hora = 0;
                            }
                        }
                    }
                }
                , 100);
        }
    }
    lapso(){
        let obj:any = {};
        obj.hora = this.hora;
        obj.minutos = this.minutos;
        obj.segundos = this.segundos;

        this.con += 1;
        this.colection.push(obj);
    }
    stop(){
        clearInterval(this.contador);
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;
        this.contador = null;
    }

}