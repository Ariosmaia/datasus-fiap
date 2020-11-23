import { Component } from '@angular/core';

@Component({
  selector: 'ngx-hospitalization-by-age',
  styleUrls: ['./hospitalization-by-age.component.scss'],
  templateUrl: './hospitalization-by-age.component.html',
})
export class HospitalizationByAgeComponent  {


  progressInfoData = [
    {
      title: 'Jovens - Até 19 anos',
      value: 26354,
      activeProgress: 30,
      description: 'Maior que o mês anterior (30%)',
    },
    {
      title: 'Adultos - Entre 20 até 59 anos',
      value: 97164,
      activeProgress: 10,
      description: 'Maior que o mês anterior (10%)',
    },
    {
      title: 'Idosos - 60 anos em diante',
      value: 57224,
      activeProgress: 55,
      description: 'Maior que o mês anterior (55%)',
    },
  ];

  constructor() {
  }

}
