import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {WelcomePage} from "../pages/welcome/welcome";
import {LocalStorageProvider} from '../providers/local-storage/local-storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  rootPage:any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  //构造函数做依赖注入
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              private LocalStorageService: LocalStorageProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      //{ title: 'WelcomePage', component: }
    ];

    //添加依赖
    let appConfig:any = this.LocalStorageService.get('App',{
      isRun: false,
      version: '0.0.1',
      author: 'catterMu'
    });
    if(appConfig.isRun==false){
      this.rootPage = WelcomePage;
      appConfig.isRun = true;
      this.LocalStorageService.set('App',appConfig);
    }else{
      this.rootPage = HomePage;
    }


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
}
