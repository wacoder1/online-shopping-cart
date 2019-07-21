import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {ProductsComponent} from './products/products.component';
import {AddproductsComponent} from './addproducts/addproducts.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EditProductsComponent} from './edit-products/edit-products.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
    },
    {path: 'products', component: ProductsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'addProducts', component: AddproductsComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'edit/:id', component: EditProductsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
