import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=navParams.get('title');
    this.property=navParams.get('property');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditshopPage');
  }

}
