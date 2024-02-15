import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.scss'
})
export class InvestmentsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

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
