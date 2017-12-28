import { Injectable } from '@angular/core';
import {LocalStorageProvider} from '../../providers/local-storage/local-storage';
import {CATEGORIES} from "./mock.categories";

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {
  constructor(private LocalStorageService: LocalStorageProvider) {
  }

  get() {
    return Promise.resolve(this.LocalStorageService.get('Category', CATEGORIES));
  }
}

export class Category{
  id: number;
  name: string;
  children: Array<Category>
}

