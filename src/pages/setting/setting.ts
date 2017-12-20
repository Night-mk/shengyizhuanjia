import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../../pages/login/login";

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  loginPage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginPage = LoginPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  /*
    拨打电话
   */
  phonecall(phoneNum:string){
      window.location.href='tel:'+phoneNum;
  }
}
