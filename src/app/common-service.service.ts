import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Products} from './classes/products';
import { Cart } from './classes/cart';
import { Person } from './classes/person';
import {PersonLogin} from './classes/personLogin';

@Injectable({
    providedIn: 'root'
})
export class CommonServiceService {
    url1 = 'http://localhost:3000/products';
    url2 = 'http://localhost:3000/cart';
    url4 = 'http://localhost:3000/person';
    constructor(private http: HttpClient) {
    }

    getProdcuts(): Observable<Products[]> {
        return this.http.get<Products[]>(this.url1);
    }
    getCart(): Observable<Cart[]> {
        return this.http.get<Cart[]>(this.url2);
    }
    updateCount(cart: Cart): Observable<Cart> {
        const url = `${this.url2}/${cart.id}` ;
        return this.http.put<Cart>(url, cart);
    }
    updateProductCount( product: Products): Observable<Products> {
        const ___url = `${this.url1}/${product.id}`;
        return this.http.put<Products>(___url, product);
    }
    post(person: Person ): Observable<any> {
        return this.http.post( 'http://localhost:3000/person' , person );
    }
    getUserData(person: PersonLogin): Observable<Person[]> {
        const url3 = `${this.url4}?Email=${person.Email}&Password=${person.Password}`;
        console.log(url3);
        return this.http.get<Person[]>(url3 );
    }
}
