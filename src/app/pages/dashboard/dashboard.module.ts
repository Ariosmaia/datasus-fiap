import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ChartModule } from 'angular2-chartjs';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {LeafletComponent} from './leaflet/leaflet.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { HospitalizationByAgeComponent } from './hospitalization-by-age/hospitalization-by-age.component';
import { InHospitalDiagnosticsCardComponent } from './in-hospital-diagnostics-card/in-hospital-diagnostics-card.component';
import { InHospitalDiagnosticsBarChartComponent } from './in-hospital-diagnostics-card/back-side/in-hospital-diagnostics-bar-chart.component';
import { InHospitalDiagnosticsFrontCardComponent } from './in-hospital-diagnostics-card/front-side/in-hospital-diagnostics-front-card.component';
import { InHospitalDiagnosticsBackCardComponent } from './in-hospital-diagnostics-card/back-side/in-hospital-diagnostics-back-card.component';
import { InHospitalDiagnosticsHeaderComponent } from './in-hospital-diagnostics-card/in-hospital-diagnostics-cards-header/in-hospital-diagnostics-cards-header.component';
import { DeathsByMunicipalityComponent } from './deaths-by-municipality/deaths-by-municipality.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    ChartsModule,
  ],
  declarations: [
    DashboardComponent,
    InHospitalDiagnosticsCardComponent,
    InHospitalDiagnosticsBarChartComponent,
    InHospitalDiagnosticsFrontCardComponent,
    InHospitalDiagnosticsBackCardComponent,
    InHospitalDiagnosticsHeaderComponent,
    DeathsByMunicipalityComponent,
    HospitalizationByAgeComponent,
    LeafletComponent,
  ],
  providers: [
  ],
})
export class DashboardModule { }
