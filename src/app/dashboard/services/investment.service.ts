import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { ChartService } from './chart.service';
import { BehaviorSubject } from 'rxjs';
import { mockInvestmentChartsData, mockInvestmentTransactionsData, mockInvestmentsTableData } from './mocks/investments';

export interface InvestmentTable {
  token: string;
  direction: string;
  instrument: string;
  price: number;
  change24h: number;
  invested: number;
  volume: number;
}

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private investmentsTableSubject$ = new BehaviorSubject<InvestmentTable[]>([]);
  investments$ = this.investmentsTableSubject$.asObservable();


  private investmentChartsSubject$ = new BehaviorSubject<any[]>([]);
  investmentCharts$ = this.investmentChartsSubject$.asObservable();

  private investmentTransactionsSubject$ = new BehaviorSubject<any[]>([]);
  recentInvestmentTransactions$ = this.investmentTransactionsSubject$.asObservable();


  constructor(private chartService: ChartService) {
    this.investmentsTableSubject$.next(this.generateMockInvestmentsTableData());
    this.investmentChartsSubject$.next(this.generateMockInvestmentsChartData());
    this.investmentTransactionsSubject$.next(this.generateMockInvestmentTransactionsData());
   }

  generateMockInvestmentsTableData(): InvestmentTable[] {
    return mockInvestmentsTableData;
  }

  generateMockInvestmentsChartData() {
    return mockInvestmentChartsData;
  }

  getInvestmentCharts$() {
    return this.investmentCharts$.pipe(
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

  generateMockInvestmentTransactionsData() {
    return mockInvestmentTransactionsData;
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
