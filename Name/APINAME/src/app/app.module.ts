import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

//Rutas
import {SUPERHERO} from "./app.routes"
import { from } from 'rxjs';
import { UniversosComponent } from './components/universos/universos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UniversosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    SUPERHERO
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
