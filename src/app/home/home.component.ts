import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProducts();
    this.api.fetchProducts.subscribe((resProducts) => {
      this.featuredProducts = resProducts;
    });
  }
}
