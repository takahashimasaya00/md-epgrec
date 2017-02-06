import { Component, HostListener } from '@angular/core';
import { CommonService } from './common/common.service';
import { WindowRefService } from './window-ref/window-ref.service';

let commonSrv: CommonService;

@Component({
  selector: 'app-epgrec',
  templateUrl: './epgrec.component.html',
  styleUrls: ['./epgrec.component.scss']
})

export class EpgrecComponent {
  SIDENAV: { SIDE: string, OVER: string, PUSH: string } = {
    SIDE: 'side',
    OVER: 'over',
    PUSH: 'push'
  };
  sideNavMode: string;
  sideNavOpened: boolean;

  constructor(private common: CommonService, private winRef: WindowRefService) {
    commonSrv = common;
    this.setSideNavStyle(winRef.nativeWindows.innerWidth);
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSideNavStyle(event.target.innerWidth);
  };

  setSideNavStyle(width: number): void {
    if (commonSrv.isDeviceXs(width)) {
      this.sideNavMode = this.SIDENAV.OVER;
      this.sideNavOpened = false;
    } else {
      this.sideNavMode = this.SIDENAV.SIDE;
      this.sideNavOpened = true;
    }
  };
}
