import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class ProductService {

 
  constructor(private db:AngularFireDatabase) { }
serv;
  create(product){
    return this.db.list('/table').push(product);
  }

  getAll(){
  
   return this.db.list('/table').snapshotChanges();
    // return ref.valueChanges({table: 'customIdName'});
  }

 

  get(tableid){
   return this.db.object('/table/' + tableid).snapshotChanges();
  
  }

  updateProduct(productId, product){
    
    return this.db.object('/table/' + productId).update(product);
  }

  Delete(tableId){
    this.db.object('/table/' + tableId).remove();
  }

}
