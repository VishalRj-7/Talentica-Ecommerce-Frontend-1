import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: Product[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  addToCart(product: Product) {
    this.items.push(product);
    this.updateCartCount();
  }

  getItems(): Product[] {

    return this.items;

    }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.updateCartCount();
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
  private updateCartCount() {
    this.cartCount.next(this.items.length);
  }
}
