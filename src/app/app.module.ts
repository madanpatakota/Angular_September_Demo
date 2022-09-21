import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DemoComponent } from './demo.component';
=======
import { DemoComponent } from './Demo/demo.component';
>>>>>>> 1037745d9885e7fa7dc9600fe44828343443eeff
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
