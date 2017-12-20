import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  CompanyPrice={
    todayPriceNow: 0,
    todayPriceLeft: 0,
    sevenDaysPriceNow:0,
    sevenDaysPriceLeft:0,
    monthPriceNow: 0,
    monthPriceLeft: 0
  };
  constructor(public navCtrl: NavController) {
    this.InitPrice();
  }

  /**
   * 生成count位是的随机数
   * @param count
   * @returns {number}
   */
  randomNumber(count:number):number{
    let code:string='';
    let num:number = 0;
    for(let i = 0; i < count; i++){
      num = Math.floor(Math.random() * 10);
      code += num;
    }
    num = parseFloat(code)/100;
    return num;
  }

  InitPrice(){
    this.CompanyPrice.todayPriceNow = this.randomNumber(5);
    this.CompanyPrice.todayPriceLeft = this.randomNumber(5);
    this.CompanyPrice.sevenDaysPriceNow = this.randomNumber(5);
    this.CompanyPrice.sevenDaysPriceLeft = this.randomNumber(5);
    this.CompanyPrice.monthPriceNow = this.randomNumber(5);
    this.CompanyPrice.monthPriceLeft = this.randomNumber(5);
    for(let item in this.CompanyPrice){
      console.log(item);
    }
  }
}
