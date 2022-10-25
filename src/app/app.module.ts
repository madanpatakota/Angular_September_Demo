import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DemoComponent } from './demo.component';
=======
import { DemoComponent } from './Demo/demo.component';
>>>>>>> 1037745d9885e7fa7dc9600fe44828343443eeff
import { DataBindComponent } from './data-bind/data-bind.component';
<<<<<<< HEAD
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
=======
import { FormsModule } from '@angular/forms';
import { DemoDirComponent } from './demo-dir/demo-dir.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { CustomBindingComponent } from './custom-binding/custom-binding.component';
import { CustomerComponent } from './customer/customer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
>>>>>>> fd3a055d0540856d72ef7f5cd5561e0c0b2a4157

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DataBindComponent,
<<<<<<< HEAD
    ShoppingCartComponent
=======
    DemoDirComponent,
    DecoratorsComponent,
    CustomBindingComponent,
    CustomerComponent,
    ParentComponent,
    ChildComponent
>>>>>>> fd3a055d0540856d72ef7f5cd5561e0c0b2a4157
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
