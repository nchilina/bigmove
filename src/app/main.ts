import {Component} from '@angular/core';

@Component({
  selector: 'main',
  template: require('./main.html')
})
export class Main {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}
