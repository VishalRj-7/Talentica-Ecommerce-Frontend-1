import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cart',
  imports: [MatIcon,MatFormFieldModule,FormsModule,MatInputModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent  {
  items: Product[]=[];
  searchText: string = '';
  private readonly cartService = inject(CartService);
  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  filteredItems(): Product[] {
    return this.items.filter(item =>
      item.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.items = this.cartService.getItems();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }
}
