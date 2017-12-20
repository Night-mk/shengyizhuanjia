import { Component,Input } from '@angular/core';

/**
 * Generated class for the CopyRightComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'copy-right',
  templateUrl: 'copy-right.html'
})
export class CopyRightComponent {
  @Input()bottom: string;
  text: string;

  constructor() {
    console.log('Hello CopyRightComponent Component');
    let year = (new Date()).getFullYear();
    this.text = `2010-${year} 生意专家`;
    this.bottom = '10px';
  }

}
