import { Component, OnDestroy } from '@angular/core';
import { TrafficList, TrafficListData } from '../../../@core/data/traffic-list';
import { TrafficBarData, TrafficBar } from '../../../@core/data/traffic-bar';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-in-hospital-diagnostics-card',
  styleUrls: ['./in-hospital-diagnostics-card.component.scss'],
  templateUrl: './in-hospital-diagnostics-card.component.html',
})
export class InHospitalDiagnosticsCardComponent {

  revealed = false;

  constructor() {
  }

  toggleView() {
    this.revealed = !this.revealed;
  }


}
