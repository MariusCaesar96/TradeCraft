import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tradeCraft';
  shouldRun = true;

  pageLinks = [
    {
      pageName: 'Dashboard',
      icon: 'home',
      link: '/dashboard'
    },
    {
      pageName: 'Spot',
      icon: 'account_balance',
      link: '/spot'
    }
  ]
}
