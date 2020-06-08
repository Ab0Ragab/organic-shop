import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$: any;
  @Input('category') category: any;
  constructor( private categoryService: CategoryService ) { 
    this.categories$ = this.categoryService.getAll();
  }

  ngOnInit() {
  }

}
