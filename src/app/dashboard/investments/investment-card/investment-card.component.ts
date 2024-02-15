import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class InvestmentCardComponent implements OnInit {
  data = [1, 2, 3, 4];
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  // Separate object for chart options
  // move to correct service
  defaultChartOptions: Highcharts.Options = {
    chart: {
      type: 'spline',
      backgroundColor: 'transparent',
      height: 70,
      margin: [2, 0, 2, 0],
      style: {
        overflow: 'visible'
      }
    },
    title: {
      text: ''
    },
    xAxis: {
      visible: false
    },
    yAxis: {
      visible: false,
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false
    },
    tooltip: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        animation: false,
        lineWidth: 2,
        marker: {
          enabled: false
        },
        states: {
          hover: {
            enabled: false
          }
        }
      }
    }
  }

  // Reference the chart options object
  chartOptionsPortfolioValue: Highcharts.Options = 
    {
      ...this.defaultChartOptions,
      series: [{
        type: 'spline',
        name: 'Portfolio Value',
        data: [22.35, 22.32, 29.62, 29.5, 21.0],
        color: '#28a745'
      }]
    }
  ;

  chartOptionsInvestedCapital: Highcharts.Options = 
    {
      ...this.defaultChartOptions,
      series: [{
        type: 'spline',
        name: 'Invested Capital',
        data: [86.15, 78.01, 84.7, 93.25, 88.79],
        color: '#ffc107' // Replace with the color you prefer
      }]
    }
  

  chartOptionsReturn: Highcharts.Options = 
    {
      ...this.defaultChartOptions,
      series: [{
        type: 'spline',
        name: 'Options Return',
        data: [42.62, 34.45, 34.37, 37.41, 42.54],
        color: '#17a2b8' // Replace with the color you prefer
      }]
    }
  

    chartOptionsArray: Highcharts.Options[] = [];

    ngOnInit(): void {
      this.chartOptionsArray = [
        this.chartOptionsInvestedCapital,
        this.chartOptionsPortfolioValue,
        this.chartOptionsReturn
      ];
    }

}


