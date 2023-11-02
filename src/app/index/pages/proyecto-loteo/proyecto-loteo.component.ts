import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { SharedServicesService } from '../../services/shared-services.service';
import { LoteoDTO } from '../../interface/loteo.interface';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';



@Component({
  selector: 'app-proyecto-loteo',
  templateUrl: './proyecto-loteo.component.html',
})
export class ProyectoLoteoComponent implements OnInit, OnDestroy {

  private map: L.Map | any = null;

  //!
  private scrollPosition: number | any;

  constructor(private miVariableIndex: SharedServicesService, private router: Router) { 

    //!
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.scrollPosition = window.scrollY;
      }
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Vuelve al principio de la página
      }
    });

  }

  ngOnInit(): void {
    this.initializeMap();
    this.datosParcela();
    this.gallery();
    console.log(this.miVariableIndex.getMiVariable());
    //!
    window.scrollTo(0, this.scrollPosition);
  }

  ngOnDestroy() {
    // Guarda la posición del scroll antes de navegar a otro componente
    this.scrollPosition = window.scrollY;
  }

  private initializeMap() {
    this.map = L.map('map').setView([-36.1431100, -71.8260500], 30);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(this.map);

    fetch(this.miVariableIndex.getMiVariable())
      .then((response) => response.json())
      .then((data) => {
        const geoJsonLayer = L.geoJSON(data, {
          style: {
            fillColor: 'green',
            color: 'red',
            weight: 1
          }
        }).addTo(this.map);

        this.map.fitBounds(geoJsonLayer.getBounds());
      });
  }

  loteo: LoteoDTO[] = [];

  private datosParcela() {
    if (this.miVariableIndex.getMiVariable() === 'assets/json/el-bonito.json') {
      console.log('todo pasando 1');
      this.loteo = [
        {
          nombre: 'El bonito',
          precio: '$6.800.000',
          distancia: '25 km de Parral',
          sector: 'camino talhuenes',
          rol: 'Propio',
          propiedades: 'Saneadas',
          transferencia: 'Lista para transferir',
          pendiente: 'Pendiente suabe',
          divicion: 'Cuenta con estacas'
        }
      ];
    }
    if (this.miVariableIndex.getMiVariable() === 'assets/json/santa-teresa.json') {
      console.log('todo pasando 2');
      this.loteo = [
        {
          nombre: 'Santa Teresa',
          precio: '$16.000.000',
          distancia: '7 km de Retiro',
          sector: 'Frente a tucapel',
          rol: 'Propio',
          propiedades: 'Saneadas',
          transferencia: 'Lista para transferir',
          pendiente: 'Sin pendiente',
          divicion: 'Cuenta con estacas'
        }
      ];
    }
    if (this.miVariableIndex.getMiVariable() === 'assets/json/talhuenes.json') {
      console.log('todo pasando 3');
      this.loteo = [
        {
          nombre: 'Lomas de Machicura',
          precio: '$10.000.000',
          distancia: '23 km de Parral',
          sector: 'Entre remulcado y camelia',
          rol: 'Propio',
          propiedades: 'Saneadas',
          transferencia: 'Lista para transferir',
          pendiente: 'Sin pendiente',
          divicion: 'Cuenta con estacas'
        }
      ];
    }
  }


  gallery() {
    document.querySelectorAll('.image-container img').forEach(image => {
      image.addEventListener('click', () => {
        const popupImage = document.querySelector('.popup-image') as HTMLElement;
        const popupImageImg : any = popupImage.querySelector('img') as HTMLImageElement;
        popupImage.style.display = 'block';
        popupImageImg.src = image.getAttribute('src');
      });
    });

    const closeButton = document.querySelector('.popup-image span') as HTMLElement;
    closeButton.addEventListener('click', () => {
      const popupImage = document.querySelector('.popup-image') as HTMLElement;
      popupImage.style.display = 'none';
    });

    // window.onload = function() {
    //   window.scrollTo(0, 0);
    // };
    
  }

}
