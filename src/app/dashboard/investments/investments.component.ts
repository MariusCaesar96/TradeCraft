import { Component } from '@angular/core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.scss'
})
export class InvestmentsComponent {

  cryptos = [
    {
      name: 'Bitcoin',
      value: 40000
    },
    {
      name: 'Ethereum',
      value: 3000
    },
    {
      name: 'Litecoin',
      value: 150
    },
    {
      name: 'Ripple',
      value: 1.5
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
}
