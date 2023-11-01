import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-proyecto-loteo',
  templateUrl: './proyecto-loteo.component.html',
  styleUrls: ['../../../../styles.css'],
})
export class ProyectoLoteoComponent implements OnInit {

  private map: L.Map | any = null;

  ngOnInit(): void {
    this.initializeMap();
  }



  private initializeMap() {
    this.map = L.map('map').setView([-35.9708855, -71.8814246], 30);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);


    fetch('assets/json/map1.json')
      .then((response) => response.json())
      .then((data) => {
        const geoJsonLayer = L.geoJSON(data, {
          style: {
            fillColor: 'red', 
            color: 'blue',   
            weight: 2       
          }
        }).addTo(this.map);

        this.map.fitBounds(geoJsonLayer.getBounds());
      });

  }

}

