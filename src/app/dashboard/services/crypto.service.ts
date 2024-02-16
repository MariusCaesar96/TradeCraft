import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private ctyptosMock$ = of([{
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
    }])

  constructor() { }

  getCryptos$() {
    return this.ctyptosMock$;
  }
}
