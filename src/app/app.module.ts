import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { AppUtils } from './utils/app-utils/app-utils';
import { HttpService } from './services/http.service';
import { PokeApiService } from './services/pokeApi.service';

import { XAMLModule } from '@src/app/utils/xaml/xaml.module';
import { HideActionBarDirective } from './utils/hideActionBar';
import { PlatformViewComponent } from './utils/platform-view';

import { HomePage } from '@src/app/pages/home/home.page';
import { TodayPage } from './pages/today/today.page';



let pages = [HomePage, TodayPage];
let directives = [HideActionBarDirective];
let components = [PlatformViewComponent]


@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    ...directives,
    ...components,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    XAMLModule,
  ],
  providers: [
    AppUtils,
    HttpService,
    PokeApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
