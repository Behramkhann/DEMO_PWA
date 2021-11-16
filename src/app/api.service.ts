import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from 'src/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private products = new BehaviorSubject<Product[]>(null!);
  constructor(private http: HttpClient) {}

  get fetchProducts() {
    return this.products.asObservable();
  }

  getProducts() {
    return this.http
      .get<Product[]>('http://localhost:3000/products')
      .pipe(
        tap((resProducts) => {
          this.products.next(resProducts);
        })
      )
      .subscribe();
  }
  getProduct(id: string) {
    return this.http
      .get<{ data: Product }>(`http://localhost:3000/products/${id}`)
      .pipe(
        map((product) => {
          return product.data;
        })
      );
  }
}
