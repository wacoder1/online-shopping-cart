import {Component, OnInit} from '@angular/core';
import {CommonServiceService} from '../common-service.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    count = 0;
    arr: any = [];
    showDatatable = false;
    delfn = this.delete.bind(this);
    columnTitle = [ 'name' , 'psc' , 'category' , 'price' , 'description' , 'isbest' , 'origin', 'date', 'option'];
    controlTitle = [
        {control: 'name' , title: 'Name'},
        {control: 'psc' , title: 'Short Code'},
        {control: 'category' , title: 'Category'},
        {control: 'price' , title: 'Price'},
        {control: 'description' , title: 'Description'},
        {control: 'isbest' , title: 'Is it Best?'},
        {control: 'origin' , title: 'Origin'},
        {control: 'date' , title: 'Created Date'},
        {control: 'option' , title: 'option'},
    ];

    constructor() {
    }

    ngOnInit() {
        this.arr = JSON.parse( localStorage.getItem('products'));
        console.log(this.arr);
        this.showDatatable = true;
    }
    delete(i: number) {
        this.showDatatable = false;
        this.arr.splice(i, 1, );
        localStorage.setItem('products', JSON.stringify(this.arr) );

        setTimeout(() => {
            this.showDatatable = true ;
        });
    }
}
