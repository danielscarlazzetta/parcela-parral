import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {


  private valorIMG : string = '';


  private cuatroEsquinasPaths: string[] = [
    '../assets/media/cuatro_esquinas/cuatroesquinas1.jpeg',
    '../assets/media/cuatro_esquinas/cuatroesquinas2.jpeg',
    '../assets/media/cuatro_esquinas/cuatroesquinas3.jpeg',
    '../assets/media/cuatro_esquinas/cuatroesquinas4.jpeg',
    '../assets/media/cuatro_esquinas/cuatroesquinas5.jpeg',
    '../assets/media/cuatro_esquinas/cuatroesquinas6.jpeg',
  ];

  private santaTeresaPaths: string[] = [
    '../assets/media/santa_teresa/imagen1.jpeg',
    '../assets/media/santa_teresa/imagen2.jpeg',
    '../assets/media/santa_teresa/imagen3.jpeg',
    '../assets/media/santa_teresa/imagen4.jpeg',
    '../assets/media/santa_teresa/imagen5.jpeg',
  ];

  private lomasPaths: string[] = [
    '../assets/media/otro_rango/imagen1.jpeg',
    '../assets/media/otro_rango/imagen2.jpeg',
    '../assets/media/otro_rango/imagen3.jpeg',
    '../assets/media/otro_rango/imagen4.jpeg',
    '../assets/media/otro_rango/imagen5.jpeg',
  ];

  // getImagePaths(valorIMG: 'data1' | 'data2' | 'data3'): string[] {
  //   switch (valorIMG) {
  //     case 'data1':
  //       return this.cuatroEsquinasPaths;
  //     case 'data2':
  //       return this.santaTeresaPaths;
  //     case 'data3':
  //       return this.lomasPaths;
  //     default:
  //       return [];
  //   }
  // }

  // getImagePaths(nuevoValorIMG : string): string[] {
  //   switch (this.setImagePaths(nuevoValorIMG)) {
  //     case 'data1':
  //       return this.cuatroEsquinasPaths;
  //     case 'data2':
  //       return this.santaTeresaPaths;
  //     case 'data3':
  //       return this.lomasPaths;
  //     default:
  //       return [];
  //   }
  // }

  // setImagePaths(nuevoValorIMG : string){
  //   this.valorIMG = nuevoValorIMG;
  //   localStorage.setItem('valorIMG', nuevoValorIMG);
  //   // console.log('Valor almacenado en localStorage:', nuevoValorIMG);
  //   switch (nuevoValorIMG) {
  //     case 'data1':
  //       console.log(nuevoValorIMG);
  //       return this.cuatroEsquinasPaths;
  //     case 'data2':
  //       console.log(nuevoValorIMG);
  //       return this.santaTeresaPaths;
  //     case 'data3':
  //       console.log(nuevoValorIMG);
  //       return this.lomasPaths;
  //     default:
  //       return [];
  //   }
  // }


  setImagePaths(nuevoValorIMG : string){
    this.valorIMG = nuevoValorIMG;
    localStorage.setItem('valorIMG', nuevoValorIMG);
   
    
    if(nuevoValorIMG === 'data1'){
      return this.cuatroEsquinasPaths;
    }
    if(nuevoValorIMG === 'data2'){
      return this.santaTeresaPaths;
    }
    if(nuevoValorIMG === 'data3'){
      return this.lomasPaths;
    }else{
      return
    }
  }


}