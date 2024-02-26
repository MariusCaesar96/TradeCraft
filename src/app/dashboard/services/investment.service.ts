import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { ChartService } from './chart.service';
import { BehaviorSubject } from 'rxjs';

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
  private investmentsSubject$ = new BehaviorSubject<InvestmentTable[]>([]);
  investments$ = this.investmentsSubject$.asObservable();


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

  constructor(private chartService: ChartService) {
    this.investmentsSubject$.next(this.generateMockInvestmentsTableData());
   }

  generateMockInvestmentsTableData(): InvestmentTable[] {
    return [
      {
        token: 'BTC',
        direction: 'Buy',
        instrument: 'Bitcoin',
        price: 24500.00,
        change24h: 2.5,
        invested: 10000.00,
        volume: 10.00,
      },
      {
        token: 'ETH',
        direction: 'Buy',
        instrument: 'Ethereum',
        price: 1500.00,
        change24h: 3.2,
        invested: 5000.00,
        volume: 5.00,
      },
      {
        token: 'XRP',
        direction: 'Sell',
        instrument: 'Ripple',
        price: 0.50,
        change24h: -1.8,
        invested: 2000.00,
        volume: 20.00,
      },
      {
        token: 'LTC',
        direction: 'Buy',
        instrument: 'Litecoin',
        price: 100.00,
        change24h: 1.2,
        invested: 3000.00,
        volume: 30.00,
      },
      {
        token: 'ADA',
        direction: 'Buy',
        instrument: 'Cardano',
        price: 0.20,
        change24h: 0.5,
        invested: 1500.00,
        volume: 15.00,
      },
      {
        token: 'DOT',
        direction: 'Buy',
        instrument: 'Polkadot',
        price: 20.00,
        change24h: 2.0,
        invested: 2500.00,
        volume: 25.00,
      },
      {
        token: 'LINK',
        direction: 'Buy',
        instrument: 'Chainlink',
        price: 30.00,
        change24h: 1.8,
        invested: 4000.00,
        volume: 40.00,
      },
      {
        token: 'XLM',
        direction: 'Sell',
        instrument: 'Stellar',
        price: 0.30,
        change24h: -0.5,
        invested: 1800.00,
        volume: 18.00,
      },
      // Add more investment data here...
    ];
  }

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
