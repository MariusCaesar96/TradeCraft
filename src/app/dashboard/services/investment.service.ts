import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private investmentsMock$ = of([
    {
      name: 'Portfolio value ',
      value: 100400.36
    },
    {
      name: 'Invested Capital',
      value: 23869.5
    },
    {
      name: 'Unrealized P/L',
      value: 400.36
    },
    {
      name: 'Return on Investment',
      value: 27882
    }
  ])

  constructor() { }

  getInvestments$() {
    return this.investmentsMock$;
  }
}
