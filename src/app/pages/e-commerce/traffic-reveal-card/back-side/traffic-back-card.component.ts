import { Component, Input, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-traffic-back-card',
  styleUrls: ['./traffic-back-card.component.scss'],
  templateUrl: './traffic-back-card.component.html',
})
export class TrafficBackCardComponent implements OnInit, AfterViewInit, OnDestroy {

  private alive = true;

  trafficBarData = [
    {name:	'coronavirus', qtd:  1763},
    {name:	'Parto espontaneo', qtd: 	918},
    {name:	'Parto unico', qtd: 	321},
    {name:	'Pneumonia', qtd: 	253},
    {name:	'Acid vasc cerebr', qtd: 	243},
    {name:	'Infarto', qtd: 	232},
    {name:	'Infecc urinario', qtd: 196},
    {name:	'Insuf cardiaca', qtd: 	188},
    {name:	'Apendicite', qtd: 	157},
    {name:	'Parto p/cesariana', qtd: 	1548},
  ];

  data: number[] = [];
  label: string[] = [];
  formatter: string[] = [];


  currentTheme: string;

  constructor(private themeService: NbThemeService) {

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }
  ngAfterViewInit(): void {
    throw this.trafficBarData.map(v => {
      this.data.push(v.qtd);
      this.label.push(v.name);
      const fmt = v.name + ': ' + v.qtd;
      this.formatter.push(fmt);
    });
  }
  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.alive = false;
  }
}
