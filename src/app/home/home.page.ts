import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quetzales: number = 0;
  resultado: number = 0; 

  constructor() {}

  convertir() {
    const tasaCambio = 8; // 1 dólar = 8 quetzales
    this.resultado = this.quetzales / tasaCambio;
  }
}