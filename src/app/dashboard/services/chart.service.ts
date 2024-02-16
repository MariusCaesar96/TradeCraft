import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
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
  
  constructor() { }
  
  generateRandomColour() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }
  
  generateRandomData(length: number) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  }
}
