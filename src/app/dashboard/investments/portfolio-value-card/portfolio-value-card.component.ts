import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-portfolio-value-card',
  standalone: true,
  imports: [MatCardModule, HighchartsChartModule, CommonModule],
  templateUrl: './portfolio-value-card.component.html',
  styleUrl: './portfolio-value-card.component.scss'
})
export class PortfolioValueCardComponent {
  @Input() portfolioValues!: any;
  Highcharts: typeof Highcharts = Highcharts;
}
