import { Injectable } from '@angular/core';

export class Program {
  id: number;
  channelDisc: string;
  channelId: number;
  type: string;
  channel: string;
  title: string;
  description: string;
  categoryId: number;
  starttime: string;
  endtime: string;
}

let programData: Program[] = [
  { id: 2593560, channelDisc: 'GR_1024', channelId: 1, type: 'GR', channel: '27', title: 'ネットで決戦！＃（笑）動画作ってみた　第二対戦！', description: '（笑）動画（ワラドウガ）作ってみました。ホームページで公開しているので、面白かったら投票してください！ｈｔｔｐ：／／ｗｗｗ．ｎｈｋ．ｏｒ．ｊｐ／ｗａｒａｄｏ／', categoryId: 3, starttime: '2017/01/29 22:59:00', endtime: '2017/01/29 23:00:00' },
  { id: 2593561, channelDisc: 'GR_1024', channelId: 1, type: 'GR', channel: '27', title: 'ダウントン・アビー５　華麗なる英国貴族の館（７）「二つの恋模様」【二】【字】', description: '２０世紀前半の英国貴族を描いた大ヒットドラマ第５章。イザベルはマートン卿との結婚を決意。祝福ムードの中、結婚に反対する者が現れ…。', categoryId: 2, starttime: '2017/01/29 23:00:00', endtime: '2017/01/29 23:53:00' },
  { id: 2593603, channelDisc: 'GR_1032', channelId: 3, type: 'GR', channel: '26', title: '古典芸能への招待「厳島観月能・紀州徳川家版“石橋”」【多】', description: '（１）厳島観月能　能「羽衣」・半能「高砂」友枝昭世ほか▽２０１６年１０月１４日／嚴島神社能舞台（２）紀州徳川家版「石橋」香川靖嗣ほか▽２０１６年２月／喜多能楽堂', categoryId: 4, starttime: '2017/01/29 21:00:00', endtime: '2017/01/29 23:00:00' },
  { id: 2593604, channelDisc: 'GR_1032', channelId: 3, type: 'GR', channel: '26', title: '美の壺・選「仰げば楽し　和の天井」【字】', description: '３つのツボで観賞指南する新感覚美術番組。今回は「天井」。世界遺産・二条城の豪華天井から、わびた茶室、建仁寺の巨大竜の天井画まで。案内役：草刈正雄　語り：木村多江', categoryId: 4, starttime: '2017/01/29 23:00:00', endtime: '2017/01/29 23:30:00' },
  { id: 2593605, channelDisc: 'GR_1032', channelId: 3, type: 'GR', channel: '26', title: 'サイエンスＺＥＲＯ「独占密着！海底に眠る巨大鉱床！」【字】', description: '日本が資源大国になる？！驚きのニュースが発表された。マンガンの塊やレアアース泥が大量に確認されたのだ。場所は南鳥島の海底５５００ｍ。ＺＥＲＯは調査に独占密着！', categoryId: 4, starttime: '2017/01/29 23:30:00', endtime: '2017/01/30' },
  { id: 2593638, channelDisc: 'GR_1040', channelId: 5, type: 'GR', channel: '25', title: '視覚探偵　日暮旅人　＃２【字】【デ】', description: '松坂桃李、多部未華子、濱田岳、北大路欣也ら個性派キャスト陣×映像の魔術師・堤幸彦監督！匂いや感情が目で視える探し物探偵・日暮旅人の活躍を笑いと涙でお届けします！', categoryId: 2, starttime: '2017/01/29 22:30:00', endtime: '2017/01/29 23:25:00' },
  { id: 2593639, channelDisc: 'GR_1040', channelId: 5, type: 'GR', channel: '25', title: 'ダウンタウンのガキの使いやあらへんで！！【字】', description: '今週のガキは森昌子カルタ争奪戦！本人エピソードの詰まった直筆カルタを奪い合い！仰天トーク＆なんでもありルールに困惑⁉さらにあの男の禁断悪ノリものまねでお怒り！？', categoryId: 3, starttime: '2017/01/29 23:25:00', endtime: '2017/01/29 23:55:00' },
  { id: 2593640, channelDisc: 'GR_1040', channelId: 5, type: 'GR', channel: '25', title: 'Ｇｏｉｎｇ！　Ｓｐｏｒｔｓ＆Ｎｅｗｓ', description: '世界新記録！競泳・渡辺一平総力特集▼女子ジャンプＷ杯速報▼今夜決着！亀梨１２０キロへ運命の挑戦！豪速球プロジェクト存続は？▼スペイン緊急取材！柴崎移籍報道の真相', categoryId: 7, starttime: '2017/01/29 23:55:00', endtime: '2017/01/30 0:55:00' },
  { id: 2593676, channelDisc: 'GR_1048', channelId: 6, type: 'GR', channel: '22', title: '未来の起源【解】【字】', description: '想像を遥かに超える形で社会と繋がってゆく最先端科学。そこには、明日を見続ける若き研究者たちがいる。その情熱と閃き、日本を元気づける「未来の起源」を紹介する。', categoryId: 4, starttime: '2017/01/29 22:54:00', endtime: '2017/01/29 23:00:00' },
  { id: 2593677, channelDisc: 'GR_1048', channelId: 6, type: 'GR', channel: '22', title: '情熱大陸【三宅純／リオ五輪閉会式・国歌『君が代』の独創的な“神アレンジ”】【字】', description: '作曲家／三宅純▽時代やカテゴリーを超越したハイブリッドな音楽で世界的賞賛を集める日本人作曲家…拠点はパリ！音楽と真摯に向き合う“ダンディズム”溢れる日常に密着！', categoryId: 4, starttime: '2017/01/29 23:00:00', endtime: '2017/01/29 23:30:00' },
  { id: 2593678, channelDisc: 'GR_1048', channelId: 6, type: 'GR', channel: '22', title: '旅ずきんちゃん【字】【ボイメンの名古屋メン！】', description: '鈴木奈々、ニッチェ・江上、みちょぱこと池田美優が、本場の名古屋で名古屋麺巡り。案内役は、名古屋の人気メンズグループ「ＢＯＹＳ　ＡＮＤ　ＭＥＮ」の小林豊。', categoryId: 3, starttime: '2017/01/29 23:30:00', endtime: '2017/01/30' },
  { id: 2593717, channelDisc: 'GR_1056', channelId: 7, type: 'GR', channel: '21', title: 'Ｍｒ．サンデー【字】', description: '安倍首相と電話会談の中身とは…世界中を挑発し続けるトランプ大統領の狙いを木村太郎が大胆解説▽ナゾの詐欺女を追跡「葉山ゆい」から手紙受け取った男性の後悔', categoryId: 6, starttime: '2017/01/29 22:00:00', endtime: '2017/ 01 / 29 23: 15:00'},
  { id: 2593718, channelDisc: 'GR_1056', channelId: 7, type: 'GR', channel: '21', title: 'スポーツＬＩＦＥ　ＨＥＲＯ’Ｓ', description: '侍ジャパン小久保監督緊急生出演で気になる代表選考について語る！▼加藤綾子キャスターも直撃！ヴィーナス最新情報▼新横綱・稀勢の里が意外な昔話を独占告白！', categoryId: 7, starttime: '2017/01/29 23:15:00', endtime: '2017/01/30 0:30:00' },
  { id: 2593755, channelDisc: 'GR_1064', channelId: 8, type: 'GR', channel: '24', title: '陸海空　地球一周するなんて（笑）アマゾンから突入ＳＰ【字】', description: '冒険家たちでさえも行ったことがない部族の村を目指す、Ｕ字工事と大学生のアマゾン旅に完全密着します！', categoryId: 3, starttime: '2017/01/29 20:58:00', endtime: '2017/01/29 23:10:00' }
];

@Injectable()
export class ProgramService {
  getProgram(channelId: number, date: string, starttime: string): Program[] {
    return programData;
  }
}
