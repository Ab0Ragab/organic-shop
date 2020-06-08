import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../shared/shopping-cart';
import { AuthService } from '../shared/auth.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appUser: any;
  cart$: Observable<ShoppingCart>;
  constructor(private authService: AuthService, private sCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.sCartService.getCart();
  }

  logOut(){
    this.authService.logOut();
  }

}
