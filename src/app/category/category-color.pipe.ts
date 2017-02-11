import { Pipe, PipeTransform } from '@angular/core';
import { CategoryService } from './category.service';


let cateSrv: CategoryService;

@Pipe({name: 'categoryColor'})
export class CategoryColorPipe implements PipeTransform {
  constructor(private cate: CategoryService) {
    cateSrv = cate;
  }

  transform(id: number): string {
    const cateList = cateSrv.getCategory(1);
    for (let i = 0; cateList.length; i++) {
      if (cateList[i].id == id) {
        return cateList[i].nameEn;
      }
    }
    return null;
  }
}
