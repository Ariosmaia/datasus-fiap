import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { TrafficList } from '../../../../@core/data/traffic-list';

@Component({
  selector: 'ngx-traffic-front-card',
  styleUrls: ['./traffic-front-card.component.scss'],
  templateUrl: './traffic-front-card.component.html',
})
export class TrafficFrontCardComponent implements OnDestroy {

  private alive = true;

  frontCardData = [
    {name:	'Infecc p/coronavirus NE', qtd:  1763},
    {name:	'Parto espontaneo cefalico', qtd: 	918},
    {name:	'Parto unico espontaneo NE', qtd: 	321},
    {name:	'JPneumonia NE', qtd: 	253},
    {name:	'Acid vasc cerebr NE como hemorrag isquemico', qtd: 	243},
    {name:	'Infarto agudo do miocardio NE', qtd: 	232},
    {name:	'Infecc do trato urinario de localiz NE', qtd: 196},
    {name:	'Insuf cardiaca congestiva', qtd: 	188},
    {name:	'Apendicite aguda SOE', qtd: 	157},
    {name:	'Parto p/cesariana NE', qtd: 	1548},
  ];

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

  }

  trackByDate(_, item) {
    return item.date;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
