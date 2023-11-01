import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  private miVariable: string = '';

  getMiVariable() {
    return this.miVariable;
  }

  setMiVariable(nuevoValor: string) {
    this.miVariable = nuevoValor;
  }
}
