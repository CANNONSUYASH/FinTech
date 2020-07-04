import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  create(product){
    return this.db.list('/table').push(product);
  }

  getAll(){
    return this.db.list('/table').valueChanges();
  }

  get(productid){
    return this.db.object('/table' + productid).valueChanges();
    console.log("ProductID:"+ productid)
  }
}
