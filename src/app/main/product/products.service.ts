import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://5d33e74dbecf3e0014ae57ab.mockapi.io/products');
  }
  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`https://5d33e74dbecf3e0014ae57ab.mockapi.io/products/${id}`);
  }
  public deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`https://5d33e74dbecf3e0014ae57ab.mockapi.io/products/${id}`);
  }
  public createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`https://5d33e74dbecf3e0014ae57ab.mockapi.io/products`, product);
  }
  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`https://5d33e74dbecf3e0014ae57ab.mockapi.io/products/${product.id}`, product);
  }
  
}
