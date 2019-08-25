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
  public deleteProducts(id: number): Observable<Product> {
    return this.http.delete<Product>(`https://5d33e74dbecf3e0014ae57ab.mockapi.io/products/${id}`);
  }
  
}
