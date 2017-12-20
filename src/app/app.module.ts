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
import {RegisterPage} from "../pages/register/register";
import { AuthenticationProvider } from '../providers/authentication/authentication';
import {FormsModule} from "@angular/forms";
import {LoginPage} from "../pages/login/login";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {CopyRightComponent} from "../components/copy-right/copy-right";
import {SettingPage} from "../pages/setting/setting";
import {ShopPage} from "../pages/shop/shop";
import {EditshopPage} from "../pages/editshop/editshop";

@NgModule({
  //组件模块声明
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    LoginPage,
    ForgotPasswordPage,
    CopyRightComponent,
    SettingPage,
    ShopPage,
    EditshopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
        backButtonText: '返回'
        //backButtonIcon: 'arrow-dropleft-circle' // 配置返回按钮的图标
    }),
    FormsModule
  ],
  //启动组件
  bootstrap: [IonicApp],
  //入口文件
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    LoginPage,
    ForgotPasswordPage,
    SettingPage,
    ShopPage,
    EditshopPage
  ],
  //服务
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageProvider,
    AuthenticationProvider
  ]
})
export class AppModule {}
