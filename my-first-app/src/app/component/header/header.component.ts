import { Component, OnInit } from '@angular/core';
import { NavService } from 'shared/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private nav: NavService) {}
  ngOnInit(): void {}
  navTo(to: '/' | '/services') {
    this.nav.navTo(to);
  }
}
