import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recent-transactions-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './recent-transactions-card.component.html',
  styleUrl: './recent-transactions-card.component.scss'
})
export class RecentTransactionsCardComponent implements OnInit {
  @Input() transactions!: any[];

  ngOnInit() {
    console.log({ transactions: this.transactions});
  }

}
