import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';

@Injectable()
export class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {

  private data: any;

  constructor() {
    super();
    this.data = {
      firstLine: this.getDataForFirstLine(),
      secondLine: this.getDataForSecondLine(),
    };
  }

  getDataForFirstLine(): number[] {
    return [81360];
  }

  getDataForSecondLine(): number[] {
    return [99382];
  }

  createEmptyArray(nPoints: number) {
    return Array.from(Array(nPoints));
  }

  getChartData(): Observable<{ firstLine: number[]; secondLine: number[]}> {
    return observableOf(this.data);
  }
}
