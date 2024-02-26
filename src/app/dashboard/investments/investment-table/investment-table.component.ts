import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.scss'
})
export class InvestmentTableComponent {

}
