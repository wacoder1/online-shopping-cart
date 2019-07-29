import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any = [];
  cartArray;
  constructor() { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('products'));
    this.cartArray = JSON.parse(localStorage.getItem('cart'));
    console.log(this.cartArray);
  }

    add(i: number) {
        this.cartArray[i].count++;
        this.products[i].count++;
        localStorage.setItem('products', JSON.stringify(this.products));
        localStorage.setItem('cart', JSON.stringify(this.cartArray));
    }

    delete(i: number) {
        if (this.cartArray[i].count > 0) {
            this.cartArray[i].count--;
            this.products[i].count--;
        }
        localStorage.setItem('products', JSON.stringify(this.products));
        localStorage.setItem('cart', JSON.stringify(this.cartArray));
    }
}
