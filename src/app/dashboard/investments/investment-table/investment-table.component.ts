import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.scss'
})
export class InvestmentTableComponent implements OnInit {
  displayedColumns: string[] = ['token', 'direction', 'instrument', 'price', 'change24h', 'invested', 'volume'];
  
  @Input() investments: any = [];
  dataSource!: MatTableDataSource<any>;


  ngOnInit(): void { 
    console.log({ investments: this.investments });
    this.investments = new MatTableDataSource(this.investments);
  }
}
