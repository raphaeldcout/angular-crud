import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "../product.model";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.productService.readById(id).subscribe((product) => {
        this.product = product;
      });
    }
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

  updateProduct(): void {
    if (this.product) {
      this.productService.update(this.product).subscribe(() => {
        this.productService.showMessage("Produto atualizado com sucesso.");
        this.router.navigate(["/products"]);
      });
    }
  }

  deleteById(): void {}
}
