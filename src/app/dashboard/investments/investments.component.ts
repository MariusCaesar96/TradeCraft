import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { InvestmentCardComponent } from './investment-card/investment-card.component';


@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  standalone: true,
  imports: [MatCardModule, HighchartsChartModule, InvestmentCardComponent],
  styleUrl: './investments.component.scss'
})
export class InvestmentsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  // Move into its own service
  cryptos_data = [
    {
      coin: 'Bitcoin',
      value: 40000,
      percetage: '+20.12',
      backgroundColor: 'orange'
    },
    { 
      coin: 'Ethereum', 
      value: 3000, 
      percetage: '+10.12', 
      backgroundColor: 'blue'
    },
    { 
      coin: 'USDC', 
      value: 150, 
      percetage: '+5.12', 
      backgroundColor: 'green'
    },
    { 
      coin: 'Ripple', 
      value: 1.5, 
      percetage: '+0.12',
      backgroundColor: 'red'
    }
  ]

  investments = [
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
  ]

  data = [1, 2, 3, 4];
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: this.data,
      },
    ],
  };


}
