import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {ProductsComponent} from './products/products.component';
import {AddproductsComponent} from './addproducts/addproducts.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
    },
    {path: 'products', component: ProductsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'addProducts', component: AddproductsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
