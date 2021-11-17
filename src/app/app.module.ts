import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductDeailsComponent } from './product-deails/product-deails.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './home/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './product-deails/info/info.component';
import { FeedbackComponent } from './product-deails/feedback/feedback.component';
import { AddonsComponent } from './product-deails/addons/addons.component';
import { SearchComponent } from './search/search.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductDeailsComponent,
    HeaderComponent,
    SliderComponent,
    InfoComponent,
    FeedbackComponent,
    AddonsComponent,
    SearchComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, scope: './' }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
