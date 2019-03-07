import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController } from '@ionic/angular';

// import { ToastController } from '@ionic-angular';


/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  constructor(public storage: Storage) {
    console.log('Hello ConfigProvider Provider');
  }


  //  async showToast(msg) {
  //   const toast = await this.toastController.create({
  //     message: msg,
  //     duration: 2000,
  //     position: 'middle',
  //     showCloseButton: true,
  //   });
  //   toast.present();
  // }


}
