import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AuthenticationProvider } from "../../providers/authentication/authentication";
import { ConfigProvider } from "../../providers/config/config";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 details = {
        email: "",
        password: ""
    };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController,
              public auth: AuthenticationProvider, public config: ConfigProvider, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'middle',
      cssClass: "fail-toast",
      showCloseButton: true,
    });
    toast.present();
  }

  async showAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'WASTEK',
      subHeader: 'INFO',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  // login function with credentials
  doLogin(){
    if(this.details.email !== "" || this.details.password !== "") {
      var loader = this.loadingCtrl.create({
        spinner: "dots",
        content: "Logging In"
      });
      loader.present();

      this.auth.doSignup(this.details)
      .then(res => {
        loader.dismiss();

       if(res.resp_code == "108") {
        //  this.setLoginKey(res.id);

        console.log("##################Response####################");
        console.log(res.id);

       }

       else if(res.resp_code == "109") {

        this.showToast(res.resp_desc);

       }


      })
      .catch(err => {
        loader.dismiss();
        console.log("####################Error##################");
        console.error(err);
      });


    } else {

      this.showAlert("Email or Password is Empty");
      console.log("Email or password is empty");

    }

    // console.log("######################################");
    // console.log(this.email);
    // console.log(this.password);
    // console.log("#######################################");

  }

  // setLoginKey(uid) {
  //   return new Promise(resolve => {
  //     this.storage
  //       .set("user", uid)
  //       .then(res => {
  //         resolve(true);
  //       })
  //       .catch(err => {
  //         console.error(err);
  //         resolve(false);
  //       });
  //   });
  // }


}
