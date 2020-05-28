import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  public valor: number = 123456;
  
  public fecha: Date = new Date();

  public valorPi: number = 0;

  public texto="RayMuNdO GaRCIa";

  public porcentaje=0.12345;

  public arregloNumerico: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public contrasenaBienDificil:string = 'MINIrazjr58**';


  constructor() { 
    this.valorPi =Math.PI;
  }

  ngOnInit(): void {
  }

}
