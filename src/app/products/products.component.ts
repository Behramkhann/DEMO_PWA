import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.fetchProducts.subscribe((resProducts) => {
      console.log(resProducts);
      this.products = resProducts;
    });
    this.api.getProducts();
  }
  onProduct() {}
}
