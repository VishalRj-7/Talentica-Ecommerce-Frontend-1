import { Component, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { MatFormFieldModule   } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {  MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from '../../pipes/filter.pipe';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [ MatFormFieldModule,MatSelectModule,MatCardModule, FormsModule,RouterModule,CommonModule,MatInputModule,FilterPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
private readonly productService = inject(ProductService);
  allProducts: Product[] = [];
  categories: string[] = ['jewelery', 'electronics',`men's clothing`,`women's clothing`];
  searchText = '';
  selectedCategory = '';
  productsPerPage = 6;
  currentPage = 1;
  paginatedProducts: Product[] = [];



  ngOnInit(): void {
    this.fetchProducts();
  }

  get totalPages(): number {
    return Math.ceil(this.allProducts.length / this.productsPerPage);
  }

  get filteredProducts(): Product[] {
    return this.allProducts.filter(p =>
      (!this.selectedCategory || p.category === this.selectedCategory) &&
      (!this.searchText || p.title.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe(data => {this.allProducts = data;  this.updatePaginatedProducts();});
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.updatePaginatedProducts();
  }

  applyFilter(): void {
    this.currentPage = 1;
    this.updatePaginatedProducts();
  }

  changePage(offset: number): void {
    this.currentPage += offset;
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts(): void {
    const start = (this.currentPage - 1) * this.productsPerPage;
    const end = start + this.productsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(start, end);
  }

}
