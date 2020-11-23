import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Selecione uma unidade</nb-card-header>
      <nb-card-body>
        <div leaflet [leafletOptions]="options" (leafletMapReady)="onMapReady($event)"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class LeafletComponent   {


  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 20,
    center: L.latLng({ lat: -23.4861546, lng: -46.5766856 }),
  };

  map: L.Map;


  onMapReady(map: L.Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private addSampleMarker() {
    const myIcon = L.icon({
      iconUrl: 'assets/images/pointer.png',
      iconSize:     [40, 40],
      shadowSize:   [50, 50],
      iconAnchor:   [23, 90],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76],
    });
    const marker = new L.Marker([-23.4861546,  -46.5766856], {icon: myIcon});
    marker.addTo(this.map).bindPopup('Ubs Jardim Brasil - São Paulo, SP')
    .openPopup();
  }

}
