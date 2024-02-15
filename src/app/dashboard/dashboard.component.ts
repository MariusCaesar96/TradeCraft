import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  options = [
    {
      name: 'Investments',
      link: 'investments',
      selected: true
    },
    {
      name: 'Markets',
      link: 'markets',
      selected: false
    },
    {
      name: 'Option Analytics',
      link: 'options-analytics',
      selected: false
    },
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  toPage(link: string) {
    console.log({ link })
    this.router.navigate([link], { relativeTo: this.route});
  }

}
