import { Component, HostListener } from '@angular/core';
import { DeviceService } from './device/device.service';
import { WindowRefService } from './window-ref/window-ref.service';
import { ProgramService, Program } from './program/program.service';

let deviceSrv: DeviceService;

@Component({
  selector: 'app-epg-channel',
  templateUrl: './epg-channel.component.html',
  styleUrls: ['./epg-channel.component.scss']
})

export class EpgChannelComponent {
  isDeviceXs: boolean;
  progList: Program[];

  constructor(
    private device: DeviceService,
    private winRef: WindowRefService,
    private prog: ProgramService
  ) {
    // inject service
    deviceSrv = device;
    this.progList = prog.getProgram(0, '', '');

    // width check
    this.isDeviceXs = deviceSrv.isMobile(winRef.nativeWindows.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // width check
    this.isDeviceXs = deviceSrv.isMobile(event.target.innerWidth);
  }
}
