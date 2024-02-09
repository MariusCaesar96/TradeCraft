import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';


const routes: Routes = [
  {
    path: '',
   component: DashboardComponent
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
