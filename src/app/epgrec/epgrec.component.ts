import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
  @Input()
  sideNavOpened: boolean;
  @Output()
  sideNavOpenedChange = new EventEmitter<boolean>();

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
      this.toggleSideNav(false);
    } else {
      this.sideNavMode = this.SIDENAV.SIDE;
      this.toggleSideNav(true);
    }
  };

  toggleSideNav(isOpen: boolean): void {
    if (isOpen === undefined || isOpen === null) {
      this.sideNavOpened = !this.sideNavOpened;
    } else {
      this.sideNavOpened = isOpen;
    }
    this.sideNavOpenedChange.emit(this.sideNavOpened);
  };
}

export class SideNav {

}
