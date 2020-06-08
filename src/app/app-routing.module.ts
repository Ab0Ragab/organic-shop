import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { FormComponent } from './admin/form/form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AdminAuthGuardService } from './shared/admin-auth-guard.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShippingpriceComponent } from './shippingprice/shippingprice.component';



const routes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'products', component: ProductsComponent},
 { path: 'shopping-cart', component: ShoppingCartComponent},
 { path: 'shopping-cart/:title', component: ShoppingCartComponent},
 { path: 'catalog', component: CatalogComponent},
 { path: 'checkOut', component: CheckoutComponent},
 { path: 'shipping', component: ShippingpriceComponent},
 { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
 { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},
 { path: 'my/oreders', component: MyOrdersComponent, canActivate: [AuthGuard]},
 { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
 { path: 'admin/products', component: FormComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
 { path: 'admin/products/new', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
 { path: 'admin/products/:title', component: FormComponent, canActivate: [AuthGuard, AdminAuthGuardService]},
 { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
