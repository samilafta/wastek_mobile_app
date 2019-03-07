import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}


  openLogin() {
    this.navCtrl.push(LoginPage);
    console.log("login page");
  }

  openRegister() {
    this.navCtrl.push(RegisterPage);
    console.log("register page");
  }

}
