import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditshopPage} from "../../pages/editshop/editshop";


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
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.editShopPage = EditshopPage;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ShopPage');
    }

}
