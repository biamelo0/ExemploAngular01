import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'Café', price: 5.0, description: 'Um cafe quente e delicioso', image:'../image copy.png'},
    { id: 2, name: 'Suco de laranja', price: 7.5, description: 'Suco natural', image:'../image copy 3.png'},
    { id: 3, name: 'Cha verde', price: 6.0, description: 'Cha saudavel', image:'../image copy 2.png'},
  ];

  getProducts(): Iproducts[]{
    return this.products;
  }

  
}

