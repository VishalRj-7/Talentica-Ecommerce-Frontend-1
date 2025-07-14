import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { MatIcon } from '@angular/material/icon';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-product-details',
  imports: [RouterModule,TopBarComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product?: Product;
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);
  private readonly route = inject(ActivatedRoute);
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(data => this.product = data);
  }

  addToCart() {
    if (this.product) this.cartService.addToCart(this.product);
  }
}
