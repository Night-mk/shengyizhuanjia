import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//依赖注入
@Injectable()
export class LocalStorageProvider {

  private storage = window.localStorage;
  constructor() {
    console.log('Hello LocalStorageProvider Provider');
  }

  //typescript需要加参数类型 any表示有返回值，可以返回任意类型
  /*
    get函数封装
   */
  get(key:string, defaultValue:any):any{
    let value:any = this.storage.getItem(key);
    try{
      value = JSON.parse(value);
    }catch(e){
      value = null;
    }
    if(value==null && defaultValue){
      value = defaultValue;
    }
    return value;
  }

  /*
    set函数封装
   */
  set(key:string, value:any){
    this.storage.setItem(key, JSON.stringify(value));
  }
  /*
    remove函数封装
   */
  remove(key:string){
    this.storage.removeItem(key);
  }

}
