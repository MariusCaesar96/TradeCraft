import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { InvestmentCardComponent } from './investment-card/investment-card.component';
import { CryptoService } from '../services/crypto.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  standalone: true,
  imports: [MatCardModule, HighchartsChartModule, InvestmentCardComponent, CommonModule],
  styleUrl: './investments.component.scss',
  providers: [CryptoService]
})
export class InvestmentsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  cryptos_data: any = [];
  cryptoData$!: Observable<any>;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoData$ = this.cryptoService.getCryptos$();
  }

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
