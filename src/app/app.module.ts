import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'

import { HomePageModule } from './home/home.module';
import { FaqPageModule } from './faq/faq.module';
import { SchedulePageModule } from './schedule/schedule.module';
import { ContactPageModule } from './contact/contact.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HomePageModule, 
    FaqPageModule, 
    SchedulePageModule, 
    ContactPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
