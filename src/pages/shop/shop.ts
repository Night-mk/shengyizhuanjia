import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditshopPage} from "../../pages/editshop/editshop";
import {LocalStorageProvider} from '../../providers/local-storage/local-storage';


/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
    editShopPage:any;
    registerInfo = {
        phone: '',
        email: '',
        shopName: '',
        shopNameShort:'',
        masterName:'',
        shopPhone:'',
        tradeType:'',
        registerTime:''
    };
    constructor(public navCtrl: NavController, public navParams: NavParams,private LocalStorageService: LocalStorageProvider) {
        this.editShopPage = EditshopPage;
    }

    ionViewWillEnter(){
        let account = this.LocalStorageService.get(this.LocalStorageService.get('currentAccount',null).user,null);
        this.registerInfo.phone = account.phone;
        this.registerInfo.email = account.email;
        this.registerInfo.shopName = account.shopName;
        this.registerInfo.shopNameShort = account.shopNameShort;
        this.registerInfo.masterName = account.masterName;
        this.registerInfo.shopPhone = account.shopPhone;
        this.registerInfo.tradeType = account.tradeType;
        this.registerInfo.registerTime = account.registerTime;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ShopPage');
    }

}
