import { Component, HostListener } from '@angular/core';
import { DeviceService } from '../device/device.service';
import { WindowRefService } from '../window-ref/window-ref.service';
import { ChannelService, Channel } from '../channel/channel.service';
import { ProgramService, Program } from '../program/program.service';

enum Category {
  news = 1, drama, variety, etc, music, information, sports, anime, cinema
}

@Component({
  selector: 'app-epg-channel',
  templateUrl: './epg-channel.component.html',
  styleUrls: ['./epg-channel.component.scss']
})

export class EpgChannelComponent {
  isDeviceXs: boolean;
  progList: Program[];
  chanList: Channel[];
  mdTabGroupWidth: string;

  constructor(
    private chan: ChannelService,
    private device: DeviceService,
    private prog: ProgramService,
    private winRef: WindowRefService
  ) {
    this.chanList = chan.getChannel(0, '', '');
    this.progList = prog.getProgram(0, '', '');

    // width check
    this.setWidth(winRef.nativeWindows.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // width check
    this.setWidth(event.target.innerWidth);
  }

  private setWidth(width: number) {
    this.isDeviceXs = this.device.isMobile(width);
    this.mdTabGroupWidth = width + 'px';
  }
}
