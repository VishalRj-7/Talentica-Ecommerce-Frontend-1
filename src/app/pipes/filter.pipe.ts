import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filter',
  standalone: true // for Angular 15+ standalone pipes
})
export class FilterPipe implements PipeTransform {
  transform(items: Product[], searchText: string): Product[] {
    if (!items || !searchText) return items;

    const lowerSearch = searchText.toLowerCase();

    return items.filter(item =>
      item.title.toLowerCase().includes(lowerSearch)
    );
  }
}
