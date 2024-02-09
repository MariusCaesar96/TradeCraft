import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  chips = [
    {
      name: 'Investments',
      link: '/investments'
    },
    {
      name: 'Markets',
      link: '/markets'
    },
    {
      name: 'Option Analytics',
      link: '/option-analytics'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
