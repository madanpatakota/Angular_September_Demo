import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { DataBindComponent } from './data-bind/data-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DataBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
