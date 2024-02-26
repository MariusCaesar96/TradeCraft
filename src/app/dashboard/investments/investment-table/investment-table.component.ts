import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.scss'
})
export class InvestmentTableComponent {
  @Input() investmentData!: any;

  displayedColumns: string[] = ['token', 'direction', 'instrument', 'price', 'change24h', 'invested', 'volume'];

  ngOnInit(): void { 
    console.log('InvestmentTableComponent: ', this.investmentData);

  }
}
