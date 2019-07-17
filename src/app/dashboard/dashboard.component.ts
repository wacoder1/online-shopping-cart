import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from '../common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    count = 0;
    sideFlag = false;
    // product: Products;
    // tempCart: Cart;
    // tempProduct: Products;
    products = [
        { id: 0, count: 0, name: 'Google Pixel 3XL', src: './assets/pixel_3a_xl.jpg', psc: 'GP3a', category: 'A', price: 400, description: 'abc', isbest: 'No', date: 1, origin: 'USA' },
        { id: 1, count: 0, name: 'OnePlus 7Pro', src: './assets/7_pro.jpg', psc: 'OP7pro', category: 'A', price: 700, description: 'abc', isbest: 'Yes', date: 1, origin: 'USA'},
        { id: 2, count: 0, name: 'Iphone Xs', src: './assets/Xs.jpeg', psc: 'Xs', category: 'A', price: 1000, description: 'abc', isbest: 'No', date: 1, origin: 'USA' },
        { id: 3, count: 0, name: 'Galaxy 10s plus', src: './assets/s10plus.jpg', psc: 's10plus', category: 'A', price: 800, description: 'abc', isbest: 'No', date: 1, origin: 'USA' },
        { id: 4, count: 0, name: 'Huawei P30 Pro', src: './assets/p30pro.jpg', psc: 'p30pro', category: 'A', price: 800, description: 'abc', isbest: 'No', date: 1, origin: 'USA' }
    ];
    cart = [
        { id: 0, count: 0 },
        { id: 1, count: 0 },
        { id: 2, count: 0 },
        { id: 3, count: 0 },
        { id: 4, count: 0 }
    ];
    constructor(private _commonService: CommonServiceService) {
    }

    ngOnInit() {

        const localproducts = JSON.parse(localStorage.getItem('products'));
        if (localproducts) {
            this.products = localproducts;
        } else {
            localStorage.setItem('products', JSON.stringify(this.products));
        }
        const localcart = JSON.parse(localStorage.getItem('cart'));
        if (localcart) {
            this.cart = localcart;
        }
        let index;
        for ( index = 0 ; index < this.products.length; index++) {
            if ( this.products[index].count) { this.count++; }
            console.log(this.count);
        }

        // this._commonService.getProdcuts()
        //     .subscribe(data => {
        //         this.products = data;
        //     });

        // this._commonService.getCart()
        //     .subscribe(data => {
        //         this.cart = data;
        //         console.log(this.cart);
        //         let index;
        //
        //         for (index = 0; index < this.cart.length; index++) {
        //             if (this.cart[index].count) {
        //                 this.count++;
        //             }
        //             console.log(this.count);
        //         }
        //     });
        //
    }

    fun(i: number) {

        if (this.cart[i].count === 0) {
            this.count++;
        }
        this.sideFlag = true;
        if (this.products[i].count < 10) {
            this.products[i].count++;
            this.cart[i].count++;
        } else {
            alert('this product is out of stock');
        }
        localStorage.setItem('products', JSON.stringify(this.products));
        localStorage.setItem('cart', JSON.stringify(this.cart));

        // const objCart = new Cart();
        // objCart.id = i;
        // objCart.count = this.cart[i].count;
        //
        // const objProduct = new Products();
        // objProduct.id = i;
        // objProduct.count = this.products[i].count;
        // objProduct.name = this.products[i].name;
        // objProduct.src = this.products[i].src;
        // this._commonService.updateProductCount(objProduct)
        //     .subscribe(data => {
        //         this.tempProduct = data;
        //         this._commonService.updateCount(objCart)
        //             .subscribe(res => this.tempCart = res);
        //     });
        //
        // console.log(this.cart);
        if (this.sideFlag) {
            document.getElementById('mySidebar').style.width = '300px';
            document.getElementById('main').style.marginRight = '300px';
            document.getElementById('mySidebar').style.boxShadow = '10px 20px 30px blue';
        }
    }

    closeNav() {
        document.getElementById('mySidebar').style.width = '0';
        document.getElementById('main').style.marginRight = '0';
    }

    addItem(i: number) {
        if (this.products[i].count < 10) {
            this.cart[i].count++;
            // const objCart = new Cart();
            // objCart.id = i;
            // objCart.count = this.cart[i].count;
            this.products[i].count++;
        }

        localStorage.setItem('products', JSON.stringify(this.products));
        localStorage.setItem('cart', JSON.stringify(this.cart));
        // const objProduct = new Products();
        // objProduct.id = i;
        // objProduct.count = this.products[i].count;
        // objProduct.name = this.products[i].name;
        // objProduct.src = this.products[i].src;
        // this._commonService.updateProductCount(objProduct)
        //     .subscribe(data => {
        //         this.tempProduct = data;
        //         this._commonService.updateCount(objCart)
        //             .subscribe(res => this.tempCart = res);
        //     });

    }

    deleteItem(i: number) {
        if (this.cart[i].count > 1) {
            this.cart[i].count--;
            this.products[i].count--;
        }
        localStorage.setItem('products', JSON.stringify(this.products));
        localStorage.setItem('cart', JSON.stringify(this.cart));
        // const objCart = new Cart();
        // objCart.id = i;
        // objCart.count = this.cart[i].count;

        // const objProduct = new Products();
        // objProduct.id = i;
        // objProduct.count = this.products[i].count;
        // objProduct.name = this.products[i].name;
        // objProduct.src = this.products[i].src;

        // this._commonService.updateProductCount(objProduct)
        //     .subscribe(data => {
        //         this.tempProduct = data;
        //         this._commonService.updateCount(objCart)
        //             .subscribe(res => this.tempCart = res);
        //     });
    }

    deleteProduct(i: number) {
        // const objCart = new Cart();
        // objCart.id = i;
        // objCart.count = 0;
        this.count--;
        this.cart[i].count = 0;
        this.products[i].count = 0;

        // const objProduct = new Products();
        // objProduct.id = i;
        // objProduct.count = 0;
        // objProduct.name = this.products[i].name;
        // objProduct.src = this.products[i].src;
        localStorage.setItem('products', JSON.stringify(this.products));
        localStorage.setItem('cart', JSON.stringify(this.cart));
        // this._commonService.updateProductCount(objProduct)
        //     .subscribe(data => {
        //         this.tempProduct = data;
        //         this._commonService.updateCount(objCart)
        //             .subscribe(res => this.tempCart = res);
        //     });

        let index;
        let localcount = 0;
        const localarray = JSON.parse(localStorage.getItem('products'));
        for (index = 0; index < localarray.length; index++) {
            if (localarray[index].count) {
                localcount++;
            }
            console.log(this.count);
        }
        this.count = localcount;
    }
}
