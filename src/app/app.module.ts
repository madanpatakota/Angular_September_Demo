import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './Demo/demo.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { FormsModule } from '@angular/forms';
import { DemoDirComponent } from './demo-dir/demo-dir.component';
import { DecoratorsComponent } from './decorators/decorators.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DataBindComponent,
    DemoDirComponent,
    DecoratorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
