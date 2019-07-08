import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    count = 0;
    sideFlag = false;
    products = [
    { name: 'Google pixel 3a', src: './assets/pixel_3a_xl.jpg', count: 0, flag: false },
    { name: 'OnePlus 7 Pro', src: './assets/7_pro.jpg', count: 0, flag: false  },
    { name: 'Iphone Xs', src: './assets/Xs.jpeg', count: 0, flag: false },
    { name: 'Galaxy 10s plus', src: './assets/s10plus.jpg', count: 0, flag: false },
    { name: 'Huawei P30 Pro', src: './assets/p30pro.jpg', count: 0, flag: false },
  ];
  constructor() { }

  ngOnInit() {
    const localarray = JSON.parse(localStorage.getItem('products'));
    if (localarray) {
      this.products = localarray;
    }
    let index;
    for ( index = 0 ; index < this.products.length; index++) {
          if ( this.products[index].count) { this.count++; }
          console.log(this.count);
      }

  }

  fun(i: number) {
    this.products[i].count++;
    this.products[i].flag = true;
    localStorage.setItem('products', JSON.stringify(this.products));
    console.log(this.products);
    this.sideFlag = true;

    let index ;
    let tempcount = 0;
    for ( index = 0 ; index < this.products.length; index++) {
        if ( this.products[index].count) { tempcount++; }
    }
    this.count = tempcount;

    if (this.sideFlag) {
        document.getElementById('mySidebar').style.width = '300px';
        document.getElementById('main').style.marginRight = '300px';
        document.getElementById('mySidebar').style.boxShadow = '10px 20px 30px blue';
  }
}

    openSidebar() {
        document.getElementById('mySidebar').style.width = '300px';
        document.getElementById('main').style.marginRight = '300px';
        document.getElementById('mySidebar').style.boxShadow = '10px 20px 30px blue';
    }
     closeNav() {
        document.getElementById('mySidebar').style.width = '0';
        document.getElementById('main').style.marginRight = '0';
    }

    addItem(i: number) {
        this.products[i].count++;
        localStorage.setItem('products', JSON.stringify(this.products));
    }

    deleteItem(i: number) {
      if (this.products[i].count > 1) {
        this.products[i].count--;
      }
      localStorage.setItem('products', JSON.stringify(this.products));
    }

    deleteProduct(i: number) {
        this.products[i].count = 0;
        localStorage.setItem('products', JSON.stringify(this.products));
        let index;
        let localcount = 0;
        const localarray = JSON.parse(localStorage.getItem('products'));
        for ( index = 0 ; index < localarray.length; index++) {
            if ( localarray[index].count) { localcount++; }
            console.log(this.count);
        }
        this.count = localcount;
    }
}
