import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-investment-card',
  standalone: true,
  imports: [MatCardModule, HighchartsChartModule, CommonModule],
  templateUrl: './investment-card.component.html',
  styleUrl: './investment-card.component.scss'
})
export class InvestmentCardComponent {
  @Input() investment!: any;
  Highcharts: typeof Highcharts = Highcharts;
}


