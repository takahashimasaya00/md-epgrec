import { AfterViewInit, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';
import { DeviceService } from '../device/device.service';
import { WindowRefService } from '../window-ref/window-ref.service';

@Component({
  selector: 'app-epgrec',
  templateUrl: './epgrec.component.html',
  styleUrls: ['./epgrec.component.scss']
})

export class EpgrecComponent implements AfterViewInit {
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

  constructor(
    private scrollSpyService: ScrollSpyService,
    private device: DeviceService,
    private winRef: WindowRefService
  ) {
    this.setSideNavStyle(winRef.nativeWindows.innerWidth);
  };

  setSideNavStyle(width: number): void {
    if (this.device.isMobile(width)) {
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

  ngAfterViewInit() {
    this.scrollSpyService.getObservable('test').subscribe((e: any) => {
      console.log('ScrollSpy::test: ', e.target.scrollTop, e.target.offsetHeight);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSideNavStyle(event.target.innerWidth);
  };
}
