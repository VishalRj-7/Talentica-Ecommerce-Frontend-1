import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  imports: [MatIcon,RouterModule,MatBadgeModule,AsyncPipe],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  private readonly cartService = inject(CartService);
  cartCount$: Observable<number>= this.cartService.cartCount$;



}
