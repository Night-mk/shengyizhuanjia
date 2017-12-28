import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {WelcomePage} from "../pages/welcome/welcome";
import {LocalStorageProvider} from '../providers/local-storage/local-storage';
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";
import {SettingPage} from "../pages/setting/setting";
import {ShopPage} from "../pages/shop/shop";
import {EditshopPage} from "../pages/editshop/editshop";
import {AddCategoryPage} from "../pages/add-category/add-category";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any,  icon: string}>;
  currentUser={
    username:'',
    phone:''
  };

  //构造函数做依赖注入
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              private LocalStorageService: LocalStorageProvider,public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '资金账户', component: HomePage, icon: 'home' },
      { title: '手机橱窗', component: ListPage, icon: 'create' },
      { title: '邀请有礼', component: ListPage, icon: 'git-merge' },
      { title: '开店论坛', component: ListPage, icon: 'cash' },
      { title: '反馈建议', component: ListPage, icon: 'cash' },
      { title: '帮助中心', component: ListPage, icon: 'cash' }
    ];
    //加载当前账户信息
    this.getCurrentAccount('currentAccount',null);
    if(this.currentUser.username==''){
      this.currentUser.username='未登录';
      this.currentUser.phone='';
    }

    //添加依赖
    // let appConfig:any = this.LocalStorageService.get('App',{
    //   isRun: false,
    //   version: '0.0.1',
    //   author: 'catterMu'
    // });
    // if(appConfig.isRun==false){
    //   this.rootPage = WelcomePage;
    //   appConfig.isRun = true;
    //   this.LocalStorageService.set('App',appConfig);
    // }else{
    //   this.rootPage = RegisterPage;
    // }


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  /**
   * 去设置页面
   */
  goToSetting(){
    this.closeMenu();
    this.nav.push(SettingPage);
  }

  /**
   * 关闭menu
   */
  closeMenu(){
    this.menuCtrl.close();
  }

  /**
   * 获取当前的账户信息
   */
  getCurrentAccount(key,value){
    let account;
    account = this.LocalStorageService.get(key,value);
    console.log(account);
    if(account!=null){
      this.currentUser.username = account.username;
      console.log(this.currentUser.username);
      this.currentUser.phone = account.phone;
    }
  }
}
