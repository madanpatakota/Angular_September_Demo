import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// main file -> i can see the appmodule as the startupmodule

// 1. what is the module

// collection of components

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
