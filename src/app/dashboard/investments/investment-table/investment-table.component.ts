import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.scss'
})
export class InvestmentTableComponent implements OnInit {
  columnHeaders: string[] = ['token', 'direction', 'instrument', 'price', 'change24h', 'invested', 'volume'];
  @Input() investments: any = [];

  ngOnInit(): void { 
    console.log({ investments: this.investments });
  }
}
