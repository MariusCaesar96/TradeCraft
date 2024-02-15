import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-investment-card',
  standalone: true,
  imports: [MatCardModule, HighchartsChartModule],
  templateUrl: './investment-card.component.html',
  styleUrl: './investment-card.component.scss'
})
export class InvestmentCardComponent {
  data = [1, 2, 3, 4];
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  // Example for a simple line chart similar to the uploaded image
   chartOptionsPortfolioValue: Highcharts.Options[] = [
     {
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
       },
       series: [{
         type: 'spline',
         name: 'Portfolio Value',
         data: [22.35, 22.32, 29.62, 29.5, 21.0],
         color: '#28a745'
       }]
      }];
   
  // You would then use this `chartOptions` object to initialize your Highcharts component.


}
