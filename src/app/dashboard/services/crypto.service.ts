import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockCryptos } from './mocks/cryptos';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private cryptoSubject$ = new BehaviorSubject<any[]>([]);
  crypto$ = this.cryptoSubject$.asObservable();

  constructor() { 
    this.cryptoSubject$.next(this.generateMockCryptos());
  }

  generateMockCryptos() {
    return mockCryptos;
  }

 
}
