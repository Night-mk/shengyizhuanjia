import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {WelcomePage} from "../pages/welcome/welcome";
import { LocalStorageProvider } from '../providers/local-storage/local-storage';

@NgModule({
  //组件模块声明
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  //启动组件
  bootstrap: [IonicApp],
  //入口文件
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage
  ],
  //服务
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageProvider
  ]
})
export class AppModule {}
