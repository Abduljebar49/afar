import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: `
    <ngx-spinner
      bdColor="rgba(51,51,51,0.8)"
      size="medium"
      color="#fff"
      type="ball-scale-multiple"
    >
      <p style="font-size: 20px; color: white">Loading...</p>
    </ngx-spinner>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  title = 'Afar UDCP';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
