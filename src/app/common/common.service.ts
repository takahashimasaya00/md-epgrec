import { Injectable } from '@angular/core';

export class Device {
  device: string;
  minWidth: number;
  maxWidth: number;
}

const DEVICE_PRESET: Device[] = [
  { device: 'xs', minWidth: 0,    maxWidth: 599},
  { device: 'sm', minWidth: 600,  maxWidth: 959},
  { device: 'md', minWidth: 960,  maxWidth: 1279},
  { device: 'lg', minWidth: 1280, maxWidth: 1919},
  { device: 'xl', minWidth: 1920, maxWidth: 5000}
];

@Injectable()
export class CommonService {
  getDevice(width: number): Device {
    let ret: Device;

    for (let i = 0 ; i < DEVICE_PRESET.length; i++) {
      const pre = DEVICE_PRESET[i];
      if (width >= pre.minWidth && width <= pre.maxWidth) {
        ret = pre;
        break;
      }
    }
    return ret;
  }

  isDeviceXs(width: number): boolean {
    for (let i = 0 ; i < DEVICE_PRESET.length; i++) {
      if (DEVICE_PRESET[i].device === 'xs') {
        return this.getDevice(width).maxWidth <= DEVICE_PRESET[i].maxWidth;
      }
    }
    return false;
  }
}
