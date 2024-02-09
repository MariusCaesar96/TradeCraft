import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  toPage(link: string) {
    console.log({ link })
    console.log({ route: this.route})
    this.router.navigate([link], { relativeTo: this.route});
  }

}
