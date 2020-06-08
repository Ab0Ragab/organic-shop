import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';




import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './admin/form/form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductFilterComponent } from './catalog/product-filter/product-filter.component';
import { ProducrCardComponent } from './producr-card/producr-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth-guard.service';
import { UserService } from './shared/user.service';
import { AdminAuthGuardService } from './shared/admin-auth-guard.service';
import { CategoryService } from './shared/category.service';
import { ProductService } from './shared/product.service';
import { ShoppingCartService } from './shared/shopping-cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutService } from './shared/checkout.service';
import { ShippingpriceComponent } from './shippingprice/shippingprice.component';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomSheetComponent } from './checkout/bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CheckOutComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ShoppingCartComponent,
    AdminOrdersComponent,
    FooterComponent,
    FormComponent,
    AdminProductsComponent,
    CatalogComponent,
    ProductFilterComponent,
    ProducrCardComponent,
    ProductQuantityComponent,
    CheckoutComponent,
    ShippingpriceComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    NgbModule,
    HttpModule,
    AppRoutingModule,
    CustomFormsModule,
    AngularFireAuthModule,
    MatBottomSheetModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    DataTableModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    CheckoutService
  ],
  entryComponents: [BottomSheetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
