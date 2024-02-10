import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { InvestmentsComponent } from './investments/investments.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'investments',
        component: InvestmentsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent, InvestmentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatChipsModule
  ]
})
export class DashboardModule { }
