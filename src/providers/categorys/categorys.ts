import { map } from 'rxjs/operator/map';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CategorysProvider {

  constructor(private firebase: AngularFireDatabase) {
  }

  get(){
    return this.firebase.object('/categorys', { preserveSnapshot: true })
      .map(snapshot => {return this.categorysFA(snapshot.val()) })
  }

  categorysFA = (data) => {
    console.log('categorysFA')
    console.log(data)
    return Object.keys(data)
                .reduce((before, current) =>{
                  return before.concat({
                                    name: current,
                                    url: data[current].url,
                                    hasLevel: data[current].hasLevel,
                                });
                }, []);
  }
}
