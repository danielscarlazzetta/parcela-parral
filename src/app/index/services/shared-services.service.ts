import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  private miVariable: string = '';

  constructor() {
    // Recuperar el valor de localStorage al inicio
    const storedValue = localStorage.getItem('miVariable');
    if (storedValue) {
      this.miVariable = storedValue;
    }
  }

  getMiVariable() {
    return this.miVariable;
  }

  setMiVariable(nuevoValor: string) {
    this.miVariable = nuevoValor;
    // Guardar el valor en localStorage
    localStorage.setItem('miVariable', nuevoValor);
  }

}


