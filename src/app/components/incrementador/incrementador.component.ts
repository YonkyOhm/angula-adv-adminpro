import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {
  
  @Input('valor') progreso: number = 50;

  //@Input() progreso: number = 50;

  @Output() valorSalida: EventEmitter<number> = new EventEmitter;

  cambiarValor( valor: number ){
    if (this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);

    return
  }
  onChange( nuevoValor: number ){
    //this.valorSalida.emit( valor );
    if(nuevoValor >= 100){
      this.progreso =100;
    }else if (nuevoValor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso);
  }
}
