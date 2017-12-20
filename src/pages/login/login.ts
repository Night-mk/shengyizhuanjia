import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ForgotPasswordPage} from '../../pages/forgot-password/forgot-password';
import { HomePage } from '../../pages/home/home';
import {RegisterPage} from "../register/register";
import { Md5 } from "ts-md5/dist/md5";
import {LocalStorageProvider} from '../../providers/local-storage/local-storage';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    username:string = '';//视图模型的属性账号，双向绑定
    password:string = '';//视图模型的属性密码，双向绑定

    constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl:ToastController,
                private alertCtrl:AlertController, private LocalStorageService: LocalStorageProvider ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    /*
        点击登录按钮时调用
     */
    login(){
        /*
            封装服务
         */
        //判断用户名（邮箱，手机）是否在localstorage数据库中
        let userName = null;
        let userPass = null;
        let userAccount=null;
        let userIndex = 0;
        while(!this.LocalStorageService.isEmpty('user'+userIndex)){
            let userInfo = this.LocalStorageService.get('user'+userIndex, null);
            if(this.username==userInfo.phone || this.username==userInfo.email){
                if(this.username==userInfo.phone){userName=userInfo.phone;}
                else{userName=userInfo.email;}
                userPass = userInfo.password;
                userAccount = userInfo;
                break;
            }
            userIndex++;
        }
        //判断用户名
        //可以登录
        if(this.username==userName && Md5.hashStr(this.password).toString()==userPass){
            console.log("login succeed!");
            this.setCurrentAccount(userAccount.shopName,userAccount.phone);
            //设置新的根page
            this.navCtrl.setRoot(HomePage);
        }else if(this.username==''){
            let toast = this.toastCtrl.create({
                message:'用户名不能为空',
                duration:3000
            });
            toast.present();
        }else if(this.username!='' && Md5.hashStr(this.password).toString()!=userPass){
            let alter = this.alertCtrl.create({
                title: '提示',
                message: '用户名或者密码不正确',
                buttons: ['确定','取消']
            });
            alter.present();
        }

    }
    /*
        点击忘记密码时调用
     */
    toForgotPassword(){
        //进入找回密码页面
        this.navCtrl.push(ForgotPasswordPage);
    }
    /*
        点击注册新账号跳转
     */
    toRegister(){
        this.navCtrl.push(RegisterPage);
    }

    /**
     * 设置当前账户信息
     * @param name
     * @param phone
     */
    setCurrentAccount(name:string,phone:string){
        //设置当前账户
        this.LocalStorageService.set('currentAccount',{
            'username': name,
            'phone': phone
        });
    }
}
