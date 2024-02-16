import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
import { InvestmentCardComponent } from './investment-card/investment-card.component';
import { CryptoService } from '../services/crypto.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  standalone: true,
  imports: [MatCardModule, HighchartsChartModule, InvestmentCardComponent, CommonModule],
  styleUrl: './investments.component.scss',
  providers: [CryptoService, InvestmentService]
})
export class InvestmentsComponent implements OnInit {
  // NOTE: Make types of these variables
  cryptoData$!: Observable<any>;
  investmentData$!: Observable<any>;

  constructor(private cryptoService: CryptoService, private investmentService: InvestmentService) { }

  ngOnInit(): void {
    this.cryptoData$ = this.cryptoService.getCryptos$();
    this.investmentData$ = this.investmentService.getInvestments$();
  }

}
