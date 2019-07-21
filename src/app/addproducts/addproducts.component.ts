import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Products} from '../classes/products';
import {Cart} from '../classes/cart';


@Component({
    selector: 'app-addproducts',
    templateUrl: './addproducts.component.html',
    styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {

    localArray;
    cartArray;
    addItem = new FormGroup({
        ProductName: new FormControl('', [Validators.required]),
        ProductShortCode: new FormControl('', Validators.required),
        Category: new FormControl('', Validators.required),
        Price: new FormControl('', Validators.required),
        Description: new FormControl(''),
        ImageSource: new FormControl(''),
        IsBestAchieved: new FormControl(''),
        CreatedDate: new FormControl(''),
        Origin: new FormControl('', Validators.required),
        Id: new FormControl(''),
        Count: new FormControl(0),
        });
    CategoryList = ['A', 'B', 'C', 'D'];
    constructor() {
    }

    ngOnInit() {
        this.localArray = JSON.parse(localStorage.getItem('products'));
        this.cartArray = JSON.parse(localStorage.getItem('cart'));
        console.log(this.cartArray);
        const length = this.localArray.length;
        this.addItem.controls.Id.setValue(length);
    }
    addProduct() {
        const tempForm = new Products();
        tempForm.name = this.addItem.value.ProductName;
        tempForm.src = this.addItem.value.ImageSource;
        tempForm.id = this.addItem.value.Id;
        tempForm.count = this.addItem.value.Count;
        tempForm.psc = this.addItem.value.ProductShortCode;
        tempForm.category = this.addItem.value.Category;
        tempForm.price = this.addItem.value.Price;
        tempForm.description = this.addItem.value.Description;
        tempForm.origin = this.addItem.value.Origin;
        tempForm.date = this.addItem.value.CreatedDate;
        tempForm.isbest = this.addItem.value.IsBestAchieved;
        console.log(this.addItem);
        this.localArray.push(tempForm);
        const tempCart = new Cart();
        tempCart.id = this.addItem.value.Id;
        tempCart.count = this.addItem.value.Count;
        debugger;
        this.cartArray.push(tempCart);

        console.log(this.localArray);
        localStorage.setItem('products', JSON.stringify(this.localArray));
        localStorage.setItem('cart', JSON.stringify(this.cartArray));
    }

}
