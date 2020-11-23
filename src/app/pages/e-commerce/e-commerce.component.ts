import { Component } from '@angular/core';
import { NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';

import * as L from 'leaflet';
import { takeWhile } from 'rxjs/operators';
import 'style-loader!leaflet/dist/leaflet.css';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {

  private alive = true;


  public horizontalBarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public horizontalBarChartLabels = ['Masculino', 'Feminino'];
  public horizontalBarChartType = 'horizontalBar';
  public horizontalBarChartLegend = true;
  public horizontalBarChartData = [
    {data: [81360], label: 'Masculino'},
    {data: [99382], label: 'Feminino'},
  ];

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
  };
  public barChartLabels = [


  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [41869], label: 'São Paulo'},
    {data: [5070], label: 'Guarulhos'},
    {data: [4217], label: 'Campinas'},
    {data: [3025], label: 'Ribeirão Preto'},
    {data: [2846], label: 'São Bernardo do Campo'},
    {data: [2647], label: 'São José dos Campos'},
    {data: [2638], label: 'Osasco'},
    {data: [2599], label: 'Santo André'},
    {data: [2478], label: 'São José do Rio Preto'},
    {data: [2301], label: 'Sorocaba'},

  ];

  public pieChartLabels = [
    'São Paulo',
    'Guarulhos',
    'Ribeirão Preto',
    'Franca',
    'São José do Rio Preto',
    'Jaú',
    'Diadema',
    'Presidente Prudente',
    'Campinas',
    'Sumaré',
  ];
  public pieChartData = [
    14807454,
    3693061,
    1508288,
    1054739,
    1053191,
    1014066,
    959572,
    914049,
    878519,
    651879,
  ];
  public pieChartType = 'pie';

  public horizontalBarChartOptionsRaca = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public horizontalBarChartLabelsRaca = [
    'branca',
    'parda',
    'não informado',
    'preta',
    'amarela',
    'indigena',

  ];
  public horizontalBarChartTypeRaca = 'horizontalBar';
  public horizontalBarChartLegendRaca = true;
  public horizontalBarChartDataRaca = [
    {data: [96541], label: 'branca'},
    {data: [48540], label: 'parda'},
    {data: [23876], label: 'não informado'},
    {data: [10114], label: 'preta'},
    {data: [1646], label: 'amarela'},
    {data: [25], label: 'indigena'},
  ];


  breakpoint: NbMediaBreakpoint = { name: '', width: 0 };
  breakpoints: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              ) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
  }

  ngOnInit() {
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }


}
