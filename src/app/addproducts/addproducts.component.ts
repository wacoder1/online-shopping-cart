import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Products} from '../classes/products';

@Component({
    selector: 'app-addproducts',
    templateUrl: './addproducts.component.html',
    styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {

    localArray;
    addItem = new FormGroup({
        ProductName: new FormControl(''),
        ImageSource: new FormControl(''),
        Id: new FormControl(''),
        Count: new FormControl(''),
        });

    constructor() {
    }

    ngOnInit() {
        this.localArray = JSON.parse(localStorage.getItem('products'));
        const length = this.localArray.length;
        this.addItem.controls['Id'].setValue(length);
    }
    addProduct() {
        const tempForm = new Products();
        tempForm.name = this.addItem.value.ProductName;
        tempForm.src = this.addItem.value.ImageSource;
        tempForm.id = this.addItem.value.Id;
        tempForm.count = this.addItem.value.Count;
        console.log(this.addItem);
        this.localArray.push(tempForm);
        console.log(this.localArray);
        localStorage.setItem('products', JSON.stringify(this.localArray));
    }

}
