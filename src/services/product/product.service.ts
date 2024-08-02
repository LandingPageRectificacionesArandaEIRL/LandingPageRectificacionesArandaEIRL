// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) { }

  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      map(data => {
        const categoryData = data.products.find((c: any) => c.category === category);
        return categoryData ? categoryData.items : [];
      })
    );
  }
}
