import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {}

  set(key: string, name: string): Promise<any>{
    return this.storage.set(key, name);
  }

  get(key: string): Promise<any>{
    return this.storage.get(key);
  }

}
