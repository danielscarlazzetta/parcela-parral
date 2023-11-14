import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { SharedServicesService } from '../../services/shared-services.service';
import { LoteoDTO } from '../../interface/loteo.interface';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatosService } from '../../services/data-service.service';
import { ImageServiceService } from '../../services/image-service.service';



@Component({
  selector: 'app-proyecto-loteo',
  templateUrl: './proyecto-loteo.component.html',
  styleUrls: ['../../../../styles.css'],
})
export class ProyectoLoteoComponent implements OnInit, OnDestroy {

  private map: L.Map | any = null;
  private scrollPosition: number | any;
  private subscription: Subscription;

  constructor(
      private miVariableIndex: SharedServicesService,
      private router: Router,
      private datosServices : DatosService,
  ) {
    this.subscription = this.router.events.subscribe((event) => {
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
    // Obtén el valor de miVariable desde localStorage
    const miVariable = localStorage.getItem('miVariable');
    // Si existe el valor en localStorage, actualiza miVariableIndex
    if (miVariable) {
      this.miVariableIndex.setMiVariable(miVariable);
    }
    window.scrollTo(0, this.scrollPosition);
    this.gallery();

  }

  ngOnDestroy() {
    // Guarda la posición del scroll antes de navegar a otro componente
    this.scrollPosition = window.scrollY;
    this.subscription.unsubscribe();
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
    const data = this.miVariableIndex.getMiVariable();
    this.loteo = this.datosServices.cargarDatosPorVariable(data);
    localStorage.getItem(data);
  }



  gallery() {
    document.querySelectorAll('.image-container img').forEach(image => {
      image.addEventListener('click', () => {
        const popupImage = document.querySelector('.popup-image') as HTMLElement;
        const popupImageImg: any = popupImage.querySelector('img') as HTMLImageElement;
        popupImage.style.display = 'block';
        popupImageImg.src = image.getAttribute('src');
      });
    });

    const closeButton = document.querySelector('.popup-image span') as HTMLElement;
    closeButton.addEventListener('click', () => {
      const popupImage = document.querySelector('.popup-image') as HTMLElement;
      popupImage.style.display = 'none';
    });
  }

}
