import { Injectable } from '@angular/core';

export class Category {
  id: number;
  nameJp: string;
  nameEn: string;
}

const categoryData: Category[] = [
  {id: 1, nameJp: 'ニュース／報道', nameEn: 'news'},
  {id: 2, nameJp: 'ドラマ', nameEn: 'drama'},
  {id: 3, nameJp: 'バラエティ', nameEn: 'variety'},
  {id: 4, nameJp: 'その他', nameEn: 'etc'},
  {id: 5, nameJp: '音楽', nameEn: 'music'},
  {id: 6, nameJp: '情報／ワイドショー', nameEn: 'information'},
  {id: 7, nameJp: 'スポーツ', nameEn: 'sports'},
  {id: 8, nameJp: 'アニメ／特撮', nameEn: 'anime'},
  {id: 9, nameJp: '映画', nameEn: 'cinema'}
];


@Injectable()
export class CategoryService {
  getCategory(id: number): Category[] {
    return categoryData;
  }
}
