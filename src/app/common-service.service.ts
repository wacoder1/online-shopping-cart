import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './classes/products';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http: HttpClient) { }

  getProdcuts() {
      return this.http.get<Products[]>('http://localhost:3000/products');
  }
}
