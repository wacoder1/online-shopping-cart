import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Products} from '../classes/products';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {

    localArray;
    productIndex: any;
    tempProduct: Products;
    addItem = new FormGroup({
        name: new FormControl('', [Validators.required]),
        psc: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        description: new FormControl(''),
        src: new FormControl(''),
        isbest: new FormControl(''),
        date: new FormControl(''),
        origin: new FormControl('', Validators.required),
        id: new FormControl(''),
        count: new FormControl(''),
    });
    CategoryList = ['A', 'B', 'C', 'D'];
    constructor(private route: ActivatedRoute) {
        this.localArray = JSON.parse(localStorage.getItem('products'));
        const length = this.localArray.length;
    }

    ngOnInit() {
        this.productIndex = Number(this.route.snapshot.paramMap.get('id'));
        console.log(this.productIndex);
        this.localArray.forEach((tempProduct , index) => {
           if ( index === this.productIndex) {
               this.tempProduct = tempProduct;
           }
        });
        // debugger;
        this.addItem.controls.name.setValue(this.tempProduct.name);
        this.addItem.controls.psc.setValue(this.tempProduct.psc);
        this.addItem.controls.category.setValue(this.tempProduct.category);
        this.addItem.controls.price.setValue(this.tempProduct.price);
        this.addItem.controls.description.setValue(this.tempProduct.description);
        this.addItem.controls.src.setValue(this.tempProduct.src);
        this.addItem.controls.isbest.setValue(this.tempProduct.isbest);
        this.addItem.controls.date.setValue(this.tempProduct.date);
        this.addItem.controls.origin.setValue(this.tempProduct.origin);
        this.addItem.controls.id.setValue(this.tempProduct.id);
        this.addItem.controls.count.setValue(this.tempProduct.count);
    }
    saveProduct() {

        this.localArray[this.productIndex] = this.addItem.value;
        console.log(this.localArray);
        localStorage.setItem('products', JSON.stringify(this.localArray));
    }
}
