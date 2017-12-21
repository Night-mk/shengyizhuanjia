import {Component, ViewChild} from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastCmp, ToastController} from 'ionic-angular';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { LoginPage } from '../../pages/login/login';
import { Md5 } from "ts-md5/dist/md5";
import {LocalStorageProvider} from '../../providers/local-storage/local-storage';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
@NgModule({
    imports: [
        FormsModule  // <--- import into the NgModule
    ]
    /* Other module metadata */
})

export class RegisterPage {
    //在组件中通过@ViewChild声明对子组件元素的实例引用
    @ViewChild('registerSlides') registerSlides:any;
    //添加register属性，register属性是一种视图模型（Model），模型中的属性与模板中的input元素通过ngModel实现双向绑定
    register = {
        phone:'',
        email:'',
        shopName:'',
        password:'',
        confirmPassword:'',
        code:''
    };
    registerInfo = {
        phone: '',
        password: '',
        email: '',
        shopName: '',
        shopNameShort:'',
        masterName:'',
        shopPhone:'',
        tradeType:'',
        registerTime:''
    };
    private seconds=0;
    constructor(public navCtrl: NavController, public navParams: NavParams, private Authentication:AuthenticationProvider,
                private toastCtrl:ToastController, private LocalStorageService: LocalStorageProvider) {
    }

    ionViewDidLoad() {
        // console.log('ionViewDidLoad RegisterPage');
        this.registerSlides.lockSwipes(true);
    }

    /*
        下一步函数
     */
    next(){
        this.registerSlides.lockSwipes(false);
        this.registerSlides.slideNext(300, true);
        this.registerSlides.lockSwipes(true);
    }
    /*
        上一步函数
     */
    previous(){
        this.registerSlides.lockSwipes(false);
        this.registerSlides.slidePrev(300, true);
        this.registerSlides.lockSwipes(true);
    }
    /*
        发送验证码函数
     */
    sendAuthCode(){
        console.log(this.Authentication.createCode(4));
        //注册验证
    }
    /*
        验证验证码是否正确
     */
    validateCode(){
        if(this.Authentication.validate(this.register.code)){
            this.next();
        }else{
            let toast = this.toastCtrl.create({
                message:'短信验证码不正确或者已过期',
                duration:3000
            });
            toast.present();
            console.log("短信验证码不正确或者已过期");
        }
    }
    /*
        倒计时60秒
     */
    showEndTime(){
        let _this_ = this;
        this.seconds=60;
        let timer = setInterval(function(){
            _this_.seconds--;
            if(_this_.seconds==0){
                clearInterval(timer);
            }
        },1000);

    }
    /*
        跳转到登录页
     */
    gotoLogin(){
        this.navCtrl.push(LoginPage);
    }

    /**
     * 验证手机号是否注册过
     */
    // isPhoneRegistered(){
    //     let userIndex = 0;
    //     while(!this.LocalStorageService.isEmpty('user'+userIndex)) {
    //         userIndex++;
    //     }
    //     if(userIndex == 0){
    //         this.next();
    //     }
    // }
    /*
        提交店铺、邮箱、密码数据数据
     */
    submitUserData(){
        if(this.register.password == this.register.confirmPassword &&
            this.register.password!='' &&
            this.register.shopName!='' &&
            this.register.email!=''){
            //对密码进行md5加密
            console.log(Md5.hashStr(this.register.password).toString());
            let password = Md5.hashStr(this.register.password).toString();
            //将数据存入localstorage
            let userIndex = 0;
            //console.log(this.LocalStorageService.isEmpty('user'+userIndex));
            while(!this.LocalStorageService.isEmpty('user'+userIndex)){
                userIndex++;
            }
            this.registerInfo.phone = this.register.phone;
            this.registerInfo.password = password;
            this.registerInfo.email = this.register.email;
            this.registerInfo.shopName = this.register.shopName;
            let timeNow = new Date();
            this.registerInfo.registerTime = timeNow.getFullYear()+'-'+(timeNow.getMonth()+1)+'-'+timeNow.getDate();
            this.LocalStorageService.set('user'+userIndex,this.registerInfo);
            this.next();
        }else{
            let toast = this.toastCtrl.create({
                message:'输入数据有误',
                duration:3000
            });
            toast.present();
        }
    }
}
