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
        Count: new FormControl(''),
    });
    CategoryList = ['A', 'B', 'C', 'D'];
    constructor(private route: ActivatedRoute) {
        this.localArray = JSON.parse(localStorage.getItem('products'));
        const length = this.localArray.length;
        this.addItem.controls.Id.setValue(length);
    }

    ngOnInit() {
        this.productIndex = this.route.snapshot.paramMap.get('id');
        this.localArray.forEach((tempProduct , index) => {
           if ( index === this.productIndex) {
               this.tempProduct = tempProduct;
           }
        });
        this.addItem.controls['ProductName'].setValue(this.tempProduct.name);
        this.addItem.controls['ProductShortCode'].setValue(this.tempProduct.psc);
        this.addItem.controls['Category'].setValue(this.tempProduct.category);
        this.addItem.controls['Price'].setValue(this.tempProduct.price);
        this.addItem.controls['Description'].setValue(this.tempProduct.description);
        this.addItem.controls['ImageSource'].setValue(this.tempProduct.src);
        this.addItem.controls['IsBestAchieved'].setValue(this.tempProduct.isbest);
        this.addItem.controls['CreatedDate'].setValue(this.tempProduct.date);
        this.addItem.controls['Origin'].setValue(this.tempProduct.origin);
        this.addItem.controls['Id'].setValue(this.tempProduct.id);
        this.addItem.controls['Count'].setValue(this.tempProduct.count);
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
        console.log(this.localArray);
        localStorage.setItem('products', JSON.stringify(this.localArray));
    }
}
