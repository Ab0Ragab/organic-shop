import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router,private cartService: ShoppingCartService,private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  ngOnInit() {
  }

  onSubmit(form: any){
    console.log(form.value);
    this.cartService.clearCart();
    this.openBottomSheet();
    this.router.navigate(['/']);
  }
}
