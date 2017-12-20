import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todayPriceNow: number;
  todayPriceLeft: number;
  constructor(public navCtrl: NavController) {
    this.todayPriceNow = this.randomNumber(5);
    this.todayPriceLeft = this.randomNumber(5);
  }

  randomNumber(count:number):number{
    let code:string='';
    for(let i = 0; i < count; i++){
      let num =Math.floor(Math.random() * 10);
      code += num;
    }
    let num = parseFloat(code)/100;
    return num;
  }
}
