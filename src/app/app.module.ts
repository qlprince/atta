import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {Main1ComponentComponent} from "./main-1-component/main-1-component.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    Main1ComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
