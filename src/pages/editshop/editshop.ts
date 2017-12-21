import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

import {LocalStorageProvider} from '../../providers/local-storage/local-storage';
import { Md5 } from "ts-md5/dist/md5";

/**
 * Generated class for the EditshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editshop',
  templateUrl: 'editshop.html',
})
export class EditshopPage {
  title:string;
  property:string;
  changeDetails:string;
  oldPwd:string;
  newPwd:string;
  //newPwA:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:ToastController,
              private LocalStorageService: LocalStorageProvider) {
    this.title=navParams.get('title');
    this.property=navParams.get('property');
    console.log(this.property);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditshopPage');
  }

  /**
   * 保存更改
   */
  saveChange(){
    let currentUser = this.LocalStorageService.get('currentAccount',null).user;
    let account = this.LocalStorageService.get(currentUser,null);
    let mark = 0;
    switch(this.title){
      case '店铺名称':
        account.shopPage = this.changeDetails;
        this.LocalStorageService.set(currentUser,account);
        break;
      case '店铺简称':
        account.shopNameShort = this.changeDetails;
        this.LocalStorageService.set(currentUser,account);
        break;
      case '店主姓名':
        account.masterName = this.changeDetails;
        this.LocalStorageService.set(currentUser,account);
        break;
      case '店铺电话':
        account.shopPhone = this.changeDetails;
        this.LocalStorageService.set(currentUser,account);
        break;
      case '行业类型':
        account.tradeType = this.changeDetails;
        this.LocalStorageService.set(currentUser,account);
        break;
      case '修改密码':
        if(Md5.hashStr(this.oldPwd).toString()!=account.password){
          let toast = this.toastCtrl.create({
            message:'原密码错误,密码修改失败',
            duration:3000
          });
          toast.present();
          mark=1;
          break;
        }else if(Md5.hashStr(this.oldPwd).toString()==account.password){
          account.password = Md5.hashStr(this.newPwd).toString();
          this.LocalStorageService.set(currentUser,account);
          break;
        }
    }
    if(mark==0){
      this.navCtrl.pop();
    }
  }

}
