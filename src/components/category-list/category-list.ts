import { Component } from '@angular/core';
import {CategoryProvider} from "../../providers/category/category";
import {ActionSheetController} from "ionic-angular";

/**
 * Generated class for the CategoryListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'category-list',
  templateUrl: 'category-list.html'
})
export class CategoryListComponent {

    categories:any;
    //当前被选中的商品大类别
    activeCategory: any;
    activeSubCategory:any;
    activeCategoryIndex:number = 0;

    constructor(private categoryService: CategoryProvider, public actionSheetCtrl: ActionSheetController) {
        categoryService.get().then((data)=>{
            this.categories = data;
        });
    }

    /**
     * 选择大分类时，改变activeCategory的值，并找到该类别下的小类
     * @param bigCategory
     */
    selectCategory(bigCategory:any){
        this.activeCategory = bigCategory;
        let index:number = 0;
        for(let item of this.categories){
            if(item.name==bigCategory){
                this.activeCategoryIndex = index;
                break;
            }else{
                index++;
            }
        }
        console.log(this.activeCategory);
    }

    /**
     * 选择小分类时，改变activeSubCategory的值，跳转回之前的页面
     * @param smallCategory
     */
    selectSubCategory(smallCategory:any){
        this.activeSubCategory = smallCategory;
    }

    presentActionSheet(){
        let actionSheet = this.actionSheetCtrl.create({
            title: '新增与编辑',
            buttons: [
                {
                    text: '新增小分类',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },{
                    text: '编辑分类',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },{
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    /**
     * 页面跳转到新增小分类页面
     */
    gotoAddCategory(){

    }
}
