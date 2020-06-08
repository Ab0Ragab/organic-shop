import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { CategoryService } from 'src/app/shared/category.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  categories$;
  constructor(public productService: ProductService, categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
   }
  

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if(!form.value.title)
    this.productService.insertProduct(form.value);
    else
    this.productService.updateProduct(form.value);
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if(form != null)
    form.reset()
    this.productService.selectedProduct = {
      title: '',
      category: '',
      imgUrl: '',
      price: null,
      quantity: null
    }
  }
   onDelete(form : NgForm){
     if(confirm('Are you sure to delete this record ?')==true)
     {
       this.productService.deleteProduct(form.value.title);
       this.resetForm(form);
     }
   }
}
