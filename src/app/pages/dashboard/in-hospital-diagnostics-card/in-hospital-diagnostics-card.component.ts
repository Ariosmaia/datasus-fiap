import { Component, OnDestroy } from '@angular/core';

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
