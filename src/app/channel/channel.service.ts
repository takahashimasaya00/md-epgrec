import { Injectable } from '@angular/core';

export class Channel {
  id: number;
  type: string;
  channel: string;
  name: string;
}

const channelData: Channel[] = [
  { id: 1, type: 'GR', channel: '27', name: 'ＮＨＫ総合１・東京' },
  { id: 3, type: 'GR', channel: '26', name: 'ＮＨＫＥテレ１東京' },
  { id: 5, type: 'GR', channel: '25', name: '日テレ１' },
  { id: 6, type: 'GR', channel: '22', name: 'ＴＢＳ１' }
  // { id: 7, type: 'GR', channel: '21', name: 'フジテレビ' },
  // { id: 8, type: 'GR', channel: '24', name: 'テレビ朝日' },
  // { id: 9, type: 'GR', channel: '23', name: 'テレビ東京１' },
  // { id: 10, type: 'GR', channel: '16', name: 'ＴＯＫＹＯ　ＭＸ１' },
  // { id: 11, type: 'GR', channel: '16', name: 'ＴＯＫＹＯ　ＭＸ１' },
  // { id: 12, type: 'GR', channel: '31', name: 'ｔｖｋ１' },
  // { id: 13, type: 'GR', channel: '30', name: 'チバテレ１' },
  // { id: 15, type: 'GR', channel: '32', name: 'テレ玉１' },
  // { id: 18, type: 'GR', channel: '28', name: '放送大学１' },
  // { id: 26, type: 'BS', channel: 'BS15_0', name: 'ＮＨＫＢＳ１' },
  // { id: 28, type: 'BS', channel: 'BS15_1', name: 'ＮＨＫＢＳプレミアム' },
  // { id: 29, type: 'BS', channel: 'BS15_1', name: 'ＮＨＫＢＳプレミアム' },
  // { id: 30, type: 'BS', channel: 'BS13_0', name: 'ＢＳ日テレ' },
  // { id: 33, type: 'BS', channel: 'BS1_0', name: 'ＢＳ朝日１' },
  // { id: 36, type: 'BS', channel: 'BS1_1', name: 'ＢＳ－ＴＢＳ' },
  // { id: 39, type: 'BS', channel: 'BS3_1', name: 'ＢＳジャパン' },
  // { id: 40, type: 'BS', channel: 'BS3_1', name: 'ＢＳジャパン２' },
  // { id: 41, type: 'BS', channel: 'BS3_1', name: 'ＢＳジャパン３' },
  // { id: 42, type: 'BS', channel: 'BS13_1', name: 'ＢＳフジ・１８１' },
  // { id: 45, type: 'BS', channel: 'BS3_0', name: 'ＷＯＷＯＷプライム' },
  // { id: 46, type: 'BS', channel: 'BS5_0', name: 'ＷＯＷＯＷライブ' },
  // { id: 47, type: 'BS', channel: 'BS5_1', name: 'ＷＯＷＯＷシネマ' },
  // { id: 48, type: 'BS', channel: 'BS9_1', name: 'スターチャンネル１' },
  // { id: 49, type: 'BS', channel: 'BS7_0', name: 'スターチャンネル２' },
  // { id: 50, type: 'BS', channel: 'BS7_0', name: 'スターチャンネル３' },
  // { id: 51, type: 'BS', channel: 'BS9_0', name: 'ＢＳ１１イレブン' },
  // { id: 52, type: 'BS', channel: 'BS9_2', name: 'ＢＳ１２トゥエルビ' },
  // { id: 53, type: 'BS', channel: 'BS11_2', name: '放送大学ＢＳ１' },
  // { id: 54, type: 'BS', channel: 'BS11_2', name: '放送大学ＢＳ２' },
  // { id: 55, type: 'BS', channel: 'BS11_2', name: '放送大学ＢＳ３' }
];


@Injectable()
export class ChannelService {
  getChannel(id: number, type: string, channel: string): Channel[] {
    return channelData;
  }
}
