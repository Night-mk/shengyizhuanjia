import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {LocalStorageProvider} from '../../providers/local-storage/local-storage';
import {LoginPage} from "../../pages/login/login";
import {AboutUsPage} from "../../pages/about-us/about-us";
import {ShopPage} from "../../pages/shop/shop";
import {EditshopPage} from "../../pages/editshop/editshop";

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
  aboutusPage:any;
  shopPage:any;
  editPage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private LocalStorageService:LocalStorageProvider) {
    this.loginPage = LoginPage;
    this.aboutusPage = AboutUsPage;
    this.shopPage = ShopPage;
    this.editPage = EditshopPage;
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

  /**
   * 退出当前登录账号
   */
  logOut(){
    //清除当前currentAccount
    this.LocalStorageService.clear('currentAccount');
    this.navCtrl.push(LoginPage);
  }
}
