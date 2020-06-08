import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular5-data-table';
import { Product } from 'src/app/shared/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  productlist: Product[];
  subscribtion: Subscription;
  tableResourse: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;
  
  constructor(private productService: ProductService, private router: Router,private chRef: ChangeDetectorRef) {
    this.subscribtion = this.productService.getData().valueChanges()
     .subscribe(p => {
      this.productlist = p;

      this.initializeTable(p);
  
     });
   }

  ngOnInit() {

    var x = this.productService.getData();
    x.snapshotChanges().subscribe(item => {
      this.productlist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.productlist.push(y as Product);
      });
    });
  }

  ngOnDestroy(){
     this.subscribtion.unsubscribe();
  }

  private initializeTable(products: Product[]){
    this.tableResourse = new DataTableResource(products);
    this.tableResourse.query({ offset: 0 })
    .then(items => this.items = items);
    this.tableResourse.count()
    .then(count => this.itemCount = count);
  }

  reloadItems(params){
     if(!this.tableResourse) return;

    this.tableResourse.query(params)
    .then(items => this.items = items);
  }

  onItemClick(product: Product) {
    this.productService.selectedProduct = Object.assign({}, product);
    //console.log(this.productlist);

  }

  filter(query: string){
     let filterdProduct = (query) ?
     this.productlist.filter(p => p.title.toLowerCase().includes(query.toLocaleLowerCase())) : this.productlist;

     this.initializeTable(filterdProduct);
  }

 
  
}
