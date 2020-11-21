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
    const marker = new L.Marker([-23.4861546,  -46.5766856]);
    marker.addTo(this.map).bindPopup('Ubs Jardim Brasil - São Paulo, SP')
    .openPopup();
  }

}
