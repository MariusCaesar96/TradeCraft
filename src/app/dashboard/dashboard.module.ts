import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { InvestmentsComponent } from './investments/investments.component';
import { MarketsComponent } from './markets/markets.component';
import { OptionAnalyticsComponent } from './option-analytics/option-analytics.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'investments',
        component: InvestmentsComponent
      },
      {
        path: 'markets',
        component: MarketsComponent
      },
      {
        path: 'options-analytics',
        component: OptionAnalyticsComponent
      },
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatChipsModule
  ]
})
export class DashboardModule { }
