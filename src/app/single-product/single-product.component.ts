import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product.interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  productId!: string;
  productDetails!: Product;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params.id;
    });
    this.api.getProduct(this.productId).subscribe((product) => {
      this.productDetails = product;
    });
  }
}
