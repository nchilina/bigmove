import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Main} from './main';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    Main
  ],
  bootstrap: [Main]
})
export class AppModule {}
