import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  defaultInvestmentCardChartOptions: Highcharts.Options = {
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

  defaultPortfolioValueChartOptions: Highcharts.Options = {
    chart: {
      type: 'areaspline',
      backgroundColor: 'white', // Transparent background
      borderWidth: 0,
      margin: [2, 2, 2, 2], // Minimal margin to maximize area
      height: 250 // Adjust height or set to '100%' to fill container
    },
    title: {
      text: '' // No title
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%Y-%m-%d %H:%M:%S}',
        align: 'center'
      },
      gridLineWidth: 1, // No grid lines
      tickWidth: 2
    },
    yAxis: {
      title: {
        text: null // No y-axis title
      },
      labels: {
        enabled: false // No labels on the y-axis
      },
      gridLineWidth: 0, // No grid lines
      startOnTick: false,
      endOnTick: false
    },
    tooltip: {
      shared: true,
    },
    legend: {
      enabled: false // No legend
    },
    credits: {
      enabled: false // No credits
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
        marker: {
          enabled: true, // Enable markers
          radius: 3 // Size of the markers
        },
        lineWidth: 2, // Width of the line
        states: {
          hover: {
            lineWidth: 2 // Width of the line when hovering
          }
        }
      }
    },
  }
  
  constructor() { }
  
  generateRandomColour() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }
  
  generateRandomData(length: number) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  }

  generateMockData(): number[] {
    const data: number[] = [];
    let value = 10000; // Starting value for the portfolio

    // Generate hourly data for 24 hours
    for (let i = 0; i < 24; i++) {
      value += Math.round((Math.random() - 0.5) * 1000);
      data.push(value);
    }

    return data;
  }
}
