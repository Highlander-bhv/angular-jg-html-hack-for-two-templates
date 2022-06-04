import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {Component1Component} from './components/component1/component1.component';
import {Component2Component} from './components/component2/component2.component';
import {Component3AddComponent} from "./components/component3/component3ADD/component3-add.component";
import {Component3Component} from "./components/component3/component3.component";



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,  AppRoutingModule,],
  declarations: [ AppComponent, HelloComponent , 
    Component1Component,
    Component2Component,
    Component3Component,
    Component3AddComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
