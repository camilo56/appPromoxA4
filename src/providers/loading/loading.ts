import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';


@Injectable()
export class LoadingProvider {

  loader: any;

  constructor(public loadingCtrl: LoadingController) {
    this.loader = this.loadingCtrl.create();
  }

  show(text: string = 'Cargando..'){
    this.loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: text
    });
    this.loader.present();
  }

  close(){
    this.loader.dismiss();
  }
}
