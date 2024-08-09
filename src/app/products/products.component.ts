import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  category: string | null = null;
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }
  downloadCatalog(): void {
    if (this.category) {
      const catalogUrl = `assets/catalogs/${this.category}-catalog.pdf`;
      window.open(catalogUrl, '_blank');
    }
  }
  redirectToCatalog() {
    window.location.href = 'https://drive.google.com/drive/folders/1xtECVgBhB4e5OB3unmbl8M-5Va92vmpY';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      if (this.category) {
        this.loadProducts();
      }
    });
  }

  loadProducts(): void {
    if (this.category) {
      this.productService.getProductsByCategory(this.category).subscribe(data => {
        this.products = data;
      });
    }
  }

  formatCategoryTitle(category: string | null): string {
    if (category) {
      return category
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
    }
    return '';
  }
}
