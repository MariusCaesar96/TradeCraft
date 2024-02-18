import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { ChartService } from './chart.service';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private investmentsMock$ = of([
    {
      name: 'Portfolio value',
      value: 100400.36
    },
    {
      name: 'Invested Capital',
      value: 23869.5
    },
    {
      name: 'Options Return',
      value: 400.36
    },
    {
      name: 'Return on Investment',
      value: 27882
    }
  ])

  constructor(private chartService: ChartService) { }

  getInvestments$() {
    return this.investmentsMock$.pipe(
      map(investments => {
        return investments.map(investment => {
          return {
            ...investment,
            chartOptions: {
              ...this.chartService.defaultInvestmentCardChartOptions,
              series: [{
                type: 'spline',
                name: investment.name,
                data: [...this.chartService.generateRandomData(10)],
                color: this.chartService.generateRandomColour()
              }]
            }
          }
        })
      }),
    );
  }

  getPortfolioValue$() { 
    return of({
      chartOptions: {
        ...this.chartService.defaultPortfolioValueChartOptions,
        series: [{
          name: 'Portfolio Value',
          // Generate mock data
          data: this.chartService.generateMockData(),
          pointStart: Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
          pointInterval: 3600 * 1000 // one hour
        }]
      }
    })
  }
}
