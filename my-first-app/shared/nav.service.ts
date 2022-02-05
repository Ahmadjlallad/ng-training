import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
  navigate: '/' | '/services' = '/';
  navTo(nav: '/' | '/services') {
    this.navigate = nav;
  }
}
