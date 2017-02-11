import { Component, HostListener, Input } from '@angular/core';
import { DeviceService } from '../device/device.service';
import { WindowRefService } from '../window-ref/window-ref.service';

let deviceSrv: DeviceService;

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

  constructor(private device: DeviceService, private winRef: WindowRefService) {
    deviceSrv = device;
    this.setSideNavStyle(winRef.nativeWindows.innerWidth);
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSideNavStyle(event.target.innerWidth);
  };

  setSideNavStyle(width: number): void {
    if (deviceSrv.isMobile(width)) {
      this.sideNavMode = this.SIDENAV.OVER;
      this.sideNavOpened = false;
    } else {
      this.sideNavMode = this.SIDENAV.SIDE;
      this.sideNavOpened = true;
    }
  };

  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
  };
}
