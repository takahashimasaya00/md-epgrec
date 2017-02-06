import { Component, HostListener } from '@angular/core';
import { CommonService } from './common/common.service';
import { WindowRefService } from './window-ref/window-ref.service';

let commonSrv: CommonService;

@Component({
  selector: 'app-epg-channel',
  templateUrl: './epg-channel.component.html',
  styleUrls: ['./epg-channel.component.scss']
})

export class EpgChannelComponent {
  isDeviceXs: boolean;

  constructor(private common: CommonService, private winRef: WindowRefService) {
    commonSrv = common;
    this.isDeviceXs = commonSrv.isDeviceXs(winRef.nativeWindows.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isDeviceXs = commonSrv.isDeviceXs(event.target.innerWidth);
  }
}
