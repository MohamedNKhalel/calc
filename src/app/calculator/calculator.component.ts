import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  constructor() {}
  isVisible:boolean=false;
  dark(){
    return this.isVisible = !this.isVisible
  }
  light(){
    return this.isVisible = !this.isVisible
  }


  resValue: string = '';
  getValue(item: any) {
    this.resValue += item;
  }

  equal() {
    if (this.resValue != '') {
      this.resValue = eval(this.resValue).toFixed(2);
    } else {
      this.resValue = 'No Data';
    }
  }
  reset(): void {
    this.resValue = '';
  }
}
