import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(private angularFireDatabase: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }


  getDataBase(): AngularFireDatabase{
    return this.angularFireDatabase;
  }

}
