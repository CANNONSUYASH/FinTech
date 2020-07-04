import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class AssignService {

  constructor(private db: AngularFireDatabase) { }

  getAssignment(){

   return this.db.list('/categories').valueChanges();
 
  }

}
