import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { SharedServicesService } from '../../services/shared-services.service';


@Component({
  selector: 'app-proyecto-loteo',
  templateUrl: './proyecto-loteo.component.html',
  styleUrls: ['../../../../styles.css'],
})
export class ProyectoLoteoComponent implements OnInit {

  private map: L.Map | any = null;


  constructor(private miVariableIndex : SharedServicesService){}

  ngOnInit(): void {
    this.initializeMap();
    console.log(this.miVariableIndex.getMiVariable())
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

}

