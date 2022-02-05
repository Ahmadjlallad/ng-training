import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server',
  // should be unique
  templateUrl: './server.component.html',
  styles: [],
  providers: [],
})
export class ServerComponent
  implements AfterContentInit, AfterContentChecked, OnInit, OnChanges
{
  serverId = 10;
  serverStatus = 'offline';
  ngAfterContentInit() {
    // console.log('ngAfterContentInit');
  }
  ngOnInit(): void {
    // console.log('ngOnInit');
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked');
  }
  ngOnChanges() {
    // console.log('ngOnChanges');
  }
}
