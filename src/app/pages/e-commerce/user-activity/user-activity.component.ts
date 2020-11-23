import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { UserActivityData, UserActive } from '../../../@core/data/user-activity';

@Component({
  selector: 'ngx-user-activity',
  styleUrls: ['./user-activity.component.scss'],
  templateUrl: './user-activity.component.html',
})
export class ECommerceUserActivityComponent implements OnDestroy {

  private alive = true;

  userActivity = [
    {city: 'São Paulo',	qtd:	2985},
    {city: 'Guarulhos',	qtd:	394},
    {city: 'Campinas',	qtd:	356},
    {city: 'São José dos Campos',	qtd:	301},
    {city: 'Ribeirão Preto',	qtd:	248},
    {city: 'São José do Rio Preto',	qtd:	239},
    {city: 'Sorocaba',	qtd:	215},
    {city: 'São Bernardo do Campo',	qtd:	197},
    {city: 'Santo André',	qtd:	189},
    {city: 'Osasco',	qtd:	182},

  ];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private userActivityService: UserActivityData) {

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }


  ngOnDestroy() {
    this.alive = false;
  }
}
